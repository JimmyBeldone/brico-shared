const defaultUsecases = {
    'Batterie & Chargeur': 0,
    'Buriner, Perforer & Démolir': 0,
    Décaper: 0,
    Défoncer: 0,
    'Meuler & Rainurer': 0,
    'Mélanger Et Malaxer': 0,
    'Outil Multifonction': 0,
    'Percer & Visser': 0,
    'Poncer & Raboter': 0,
    Scier: 0,
};

const defaultTools = {
    'Perceuse Visseuse': 0,
    'Perceuse À Percussion': 0,
    'Ponceuse Excentrique': 0,
    'Ponceuse Multifonctions': 0,
    'Ponceuse Triangulaire': 0,
    'Ponceuse Vibrante': 0,
    'Ponceuse À Bande': 0,
    'Ponceuse À Plâtre': 0,
    'Ponceuse À Plâtre Télescopique': 0,
    Rabot: 0,
    Rainureuse: 0,
    'Scie Circulaire': 0,
    'Scie Plongeante': 0,
    'Scie Sabre': 0,
    'Scie Sauteuse Pendulaire': 0,
    Torche: 0,
    'Tournevis Électrique': 0,
    'Visseuse À Choc': 0,
};

const defaultBrands = {
    Bosch: 0,
    'Bosch Bleu': 0,
    Cat: 0,
    Erbauer: 0,
    'Performance Power': 0,
    'Stanley Fatmax': 0,
    Titan: 0,
};

const defaultClickstream = {
    marque: 0,
    projet: 0,
    usage: 0,
};

const defaultFrequency = {
    Intensif: 0,
    Occasionnel: 0,
    Professionnel: 0,
    Régulier: 0,
};

const defaultProjects = {
    batir: 0,
    bois: 0,
    carrelage: 0,
    cuisine: 0,
    demolir: 0,
    essentiels: 0,
    meubles: 0,
    sdb: 0,
    sol: 0,
};

const types = [
    'brands',
    'clickstream',
    'tools',
    'usecases',
    'frequencies',
    'projects',
    'buttons',
];

const eletroportatifDefaultTypes = {
    appVersion: 'Null',
    brands: defaultBrands,
    buttons: { filter: 0 },
    clickstream: defaultClickstream,
    frequencies: defaultFrequency,
    id: undefined,
    label: undefined,
    lastTimeActive: 'Null',
    projects: defaultProjects,
    tools: defaultTools,
    usecases: defaultUsecases,
};

export default eletroportatifDefaultTypes;
