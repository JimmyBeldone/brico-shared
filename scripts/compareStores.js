import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import storesListCompleted from '../src/storesListCompleted.js';

/**
 * Parse CSV file and return array of store objects
 * @param {string} csvFilePath - Path to CSV file
 * @returns {Promise<Array>} Array of store objects from CSV
 */
function parseCsvFile(csvFilePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        
        if (!fs.existsSync(csvFilePath)) {
            reject(new Error(`CSV file not found: ${csvFilePath}`));
            return;
        }

        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data) => {
                // Convert string id to number to match JSON format
                if (data.id) {
                    data.id = parseInt(data.id, 10);
                }
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

/**
 * Compare two store objects and return differences
 * @param {Object} csvStore - Store from CSV
 * @param {Object} jsonStore - Store from JSON
 * @returns {Object|null} Object with field differences or null if no differences
 */
function compareStoreFields(csvStore, jsonStore) {
    const differences = {};
    
    // Get all unique keys from both objects
    const allKeys = new Set([...Object.keys(csvStore), ...Object.keys(jsonStore)]);
    
    for (const key of allKeys) {
        const csvValue = csvStore[key];
        const jsonValue = jsonStore[key];
        
        // Skip comparison if both values are undefined/null
        if ((csvValue === undefined || csvValue === null || csvValue === '') && 
            (jsonValue === undefined || jsonValue === null || jsonValue === '')) {
            continue;
        }
        
        // Convert values to strings for comparison to handle type differences
        const csvStr = String(csvValue || '').trim();
        const jsonStr = String(jsonValue || '').trim();
        
        if (csvStr !== jsonStr) {
            differences[key] = {
                csv: csvValue,
                json: jsonValue
            };
        }
    }
    
    return Object.keys(differences).length > 0 ? differences : null;
}

/**
 * Compare CSV stores with JSON stores and generate difference report
 * @param {Array} csvStores - Array of stores from CSV
 * @param {Array} jsonStores - Array of stores from JSON
 * @returns {Object} Comparison report
 */
function compareStores(csvStores, jsonStores) {
    // Create maps for efficient lookup by id
    const csvMap = new Map();
    const jsonMap = new Map();
    
    // Build CSV map
    csvStores.forEach(store => {
        if (store.id !== undefined && store.id !== null && !isNaN(store.id)) {
            csvMap.set(store.id, store);
        }
    });
    
    // Build JSON map
    jsonStores.forEach(store => {
        if (store.id !== undefined && store.id !== null) {
            jsonMap.set(store.id, store);
        }
    });
    
    const missingInJson = [];
    const missingInCsv = [];
    const differences = [];
    
    // Find stores in CSV but not in JSON
    for (const [id, csvStore] of csvMap) {
        if (!jsonMap.has(id)) {
            missingInJson.push(csvStore);
        }
    }
    
    // Find stores in JSON but not in CSV, and stores with differences
    for (const [id, jsonStore] of jsonMap) {
        if (!csvMap.has(id)) {
            missingInCsv.push(jsonStore);
        } else {
            // Both exist, check for differences
            const csvStore = csvMap.get(id);
            const fieldDifferences = compareStoreFields(csvStore, jsonStore);
            
            if (fieldDifferences) {
                differences.push({
                    id: id,
                    fields: fieldDifferences
                });
            }
        }
    }
    
    return {
        missingInJson,
        missingInCsv,
        differences
    };
}

/**
 * Main function to compare CSV file with JSON stores
 * @param {string} csvFilePath - Path to CSV file
 * @param {string} outputPath - Path to output JSON file (optional)
 */
async function main(csvFilePath, outputPath) {
    try {
        console.log('🔍 Starting store comparison...');
        
        // Parse CSV file
        console.log(`📄 Reading CSV file: ${csvFilePath}`);
        const csvStores = await parseCsvFile(csvFilePath);
        console.log(`✅ Found ${csvStores.length} stores in CSV`);
        
        // Get JSON stores
        console.log(`📊 Using JSON data from storesListCompleted.js`);
        console.log(`✅ Found ${storesListCompleted.length} stores in JSON`);
        
        // Compare stores
        console.log('🔄 Comparing stores...');
        const comparisonResult = compareStores(csvStores, storesListCompleted);
        
        // Display summary
        console.log('\n📈 Comparison Summary:');
        console.log(`- Stores in CSV but not in JSON: ${comparisonResult.missingInJson.length}`);
        console.log(`- Stores in JSON but not in CSV: ${comparisonResult.missingInCsv.length}`);
        console.log(`- Stores with differences: ${comparisonResult.differences.length}`);
        
        // Generate output
        const resultJson = JSON.stringify(comparisonResult, null, 2);
        
        if (outputPath) {
            fs.writeFileSync(outputPath, resultJson, 'utf8');
            console.log(`\n💾 Results saved to: ${outputPath}`);
        } else {
            console.log('\n📋 Comparison Results:');
            console.log(resultJson);
        }
        
        console.log('\n✅ Comparison completed successfully!');
        
    } catch (error) {
        console.error('❌ Error during comparison:', error.message);
        process.exit(1);
    }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Usage: node compareStores.js <csv-file-path> [output-file-path]');
    console.log('Example: node compareStores.js stores.csv comparison-result.json');
    process.exit(1);
}

const csvFilePath = args[0];
const outputPath = args[1];

// Run the comparison
main(csvFilePath, outputPath);