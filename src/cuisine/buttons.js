const buttons = [
    {
        id: '3d',
        label: 'Outil 3d',
    },
    {
        id: 'needHelp',
        label: 'NeedHelp',
    },
];

const formatButtonsDBSkeleton = () => {
    const buttonsDBSkeleton = {};

    buttons.forEach(({ id, label }) => {
        buttonsDBSkeleton[id] = {};
        buttonsDBSkeleton[id].total = 0;
        buttonsDBSkeleton[id].totalByDate = {};
        buttonsDBSkeleton[id].label = label;
    });

    return buttonsDBSkeleton;
};

export default formatButtonsDBSkeleton;
