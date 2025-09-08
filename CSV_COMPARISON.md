# CSV Store Comparison Tool

This tool compares store data from a CSV file with the existing JSON store list (`src/storesListCompleted.js`) and generates a detailed difference report.

## Features

- ✅ Reads CSV files with store data
- ✅ Compares with existing JSON store data using `id` as unique identifier
- ✅ Identifies stores missing in JSON but present in CSV
- ✅ Identifies stores missing in CSV but present in JSON
- ✅ Detects field differences between matching stores
- ✅ Generates structured JSON output
- ✅ Command-line interface with error handling

## Usage

### Direct script execution:
```bash
node scripts/compareStores.js <csv-file-path> [output-file-path]
```

### Using npm script:
```bash
npm run compare-stores -- <csv-file-path> [output-file-path]
```

### Examples:
```bash
# Display results in console
node scripts/compareStores.js stores.csv

# Save results to file
node scripts/compareStores.js stores.csv comparison-result.json

# Using npm script
npm run compare-stores -- stores.csv results.json
```

## CSV Format

The CSV file should contain store data with the following supported columns:
- `id` (required) - Unique store identifier
- `label` - Store name/label
- `legacy` - Legacy store ID
- `easier` - Easier system ID
- `region` - Store region
- `bassin` - Store basin classification

Example CSV:
```csv
id,label,legacy,easier,region,bassin
1701,REIMS,1701,2330,NORD EST,GSB
1703,NANTES,1703,2331,CENTRE ATLANTIQUE,GSB
```

## Output Format

The tool generates a JSON report with the following structure:

```json
{
  "missingInJson": [
    // Stores present in CSV but not in JSON
  ],
  "missingInCsv": [
    // Stores present in JSON but not in CSV
  ],
  "differences": [
    {
      "id": "store_id",
      "fields": {
        "field_name": {
          "csv": "csv_value",
          "json": "json_value"
        }
      }
    }
  ]
}
```

## Dependencies

- `csv-parser` - Lightweight CSV parsing library

## Integration

This tool is designed to integrate easily into automation workflows:
- Returns appropriate exit codes (0 for success, 1 for error)
- Provides clear console output for monitoring
- Generates machine-readable JSON output
- Can be used in Makefiles, cron jobs, or CI/CD pipelines