import {
    ADELE_GRIS_MAT_ELEMENTS,
    BASILIE_CHENE_FUME_ELEMENTS,
    BASILIE_CHENE_GRIS_ELEMENTS,
    COLINE_CHENE_CLAIR_ELEMENTS,
    COLINE_CHENE_SAUGE_ELEMENTS,
    DORICE_ANTHRACITE_MAT_ELEMENTS,
    DORICE_BEIGE_MAT_ELEMENTS,
    DORICE_BLANC_BRILLANT_ELEMENTS,
    DORICE_BLEU_NUIT_MAT_ELEMENTS,
    FLORIE_ANTHRACITE_MAT_ELEMENTS,
    FLORIE_BLANC_MAT_ELEMENTS,
    GLORIAN_BLANC_BRILLANT_ELEMENTS,
    HELINE_NOIR_MAT_ELEMENTS,
    HELINE_NOYER_MAT_ELEMENTS,
    ILONA_CHENE_DORE_ELEMENTS,
} from './kitchenElements.js';

const kitchens = [
    {
        elements: ADELE_GRIS_MAT_ELEMENTS,
        id: 'adeleGrisMat',
        title: 'Adele gris mat',
    },
    {
        elements: BASILIE_CHENE_GRIS_ELEMENTS,
        id: 'basilieCheneGris',
        title: 'Basilie chêne gris',
    },
    {
        elements: BASILIE_CHENE_FUME_ELEMENTS,
        id: 'basilieCheneFume',
        title: 'Basilie chêne fumé',
    },
    {
        elements: COLINE_CHENE_CLAIR_ELEMENTS,
        id: 'colineCheneClair',
        title: 'Coline chêne clair',
    },
    {
        elements: COLINE_CHENE_SAUGE_ELEMENTS,
        id: 'colineCheneSauge',
        title: 'Coline chêne sauge',
    },
    {
        elements: DORICE_ANTHRACITE_MAT_ELEMENTS,
        id: 'doriceAnthraciteMat',
        title: 'Dorice anthracite mat',
    },
    {
        elements: DORICE_BEIGE_MAT_ELEMENTS,
        id: 'doriceBeigeMat',
        title: 'Dorice beige mat',
    },
    {
        elements: DORICE_BLANC_BRILLANT_ELEMENTS,
        id: 'doriceBlancBrillant',
        title: 'Dorice blanc brillant',
    },
    {
        elements: DORICE_BLEU_NUIT_MAT_ELEMENTS,
        id: 'doriceBleuNuitMat',
        title: 'Dorice bleu mat',
    },
    {
        elements: FLORIE_BLANC_MAT_ELEMENTS,
        id: 'florieBlancMat',
        title: 'Florie blanc mat',
    },
    {
        elements: FLORIE_ANTHRACITE_MAT_ELEMENTS,
        id: 'florieAnthraciteMat',
        title: 'Florie anthracite mat',
    },
    {
        elements: GLORIAN_BLANC_BRILLANT_ELEMENTS,
        id: 'glorianBlancBrillant',
        title: 'Glorian blanc brillant',
    },
    {
        elements: HELINE_NOYER_MAT_ELEMENTS,
        id: 'helineNoyerMat',
        title: 'Heline noyer mat',
    },
    {
        elements: HELINE_NOIR_MAT_ELEMENTS,
        id: 'helineNoirMat',
        title: 'Heline noir mat',
    },
    {
        elements: ILONA_CHENE_DORE_ELEMENTS,
        id: 'ilonaCheneDoré',
        title: 'Ilona chêne doré',
    },
];

const formatKitchensDBSkeleton = () => {
    const kitchensDBSkeleton = {};

    kitchens.forEach(({ elements, id, title }) => {
        kitchensDBSkeleton[id] = {};
        kitchensDBSkeleton[id].total = 0;
        kitchensDBSkeleton[id].totalByDate = {};
        kitchensDBSkeleton[id].label = title;
        kitchensDBSkeleton[id].knowMoreButton = 0;
        kitchensDBSkeleton[id].elements = {};

        elements.forEach(({ id: elementId, title: label }) => {
            kitchensDBSkeleton[id].elements[elementId] = {
                label,
                total: 0,
                totalByDate: {},
            };
        });
    });

    return kitchensDBSkeleton;
};

export default formatKitchensDBSkeleton;
