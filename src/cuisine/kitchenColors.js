const kitchenColors = [
    {
        id: 'white',
        label: 'Blanc / Crème',
    },
    {
        id: 'black',
        label: 'Noir / Gris',
    },
    {
        id: 'wood',
        label: 'Décor bois',
    },
    {
        id: 'color',
        label: 'Autres coloris',
    },
];

const formatKitchenColorsDBSkeleton = () => {
    const kitchenColorsDBSkeleton = {};

    kitchenColors.forEach(({ id, label }) => {
        kitchenColorsDBSkeleton[id] = {};
        kitchenColorsDBSkeleton[id].total = 0;
        kitchenColorsDBSkeleton[id].totalByDate = {};
        kitchenColorsDBSkeleton[id].label = label;
    });

    return kitchenColorsDBSkeleton;
};

export default formatKitchenColorsDBSkeleton;
