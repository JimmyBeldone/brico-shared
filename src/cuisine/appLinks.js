const links = [
    {
        id: 'modele',
        label: 'Choix du modèle',
    },
    {
        id: 'conception',
        label: 'Conception 3D',
    },
    {
        id: 'financement',
        label: 'Devis et financement',
    },
    {
        id: 'livraison',
        label: 'Livraison',
    },
    {
        id: 'pose',
        label: 'Pose',
    },
    {
        id: 'sav',
        label: 'SAV',
    },
];

const formatLinksDBSkeleton = () => {
    const linksDBSkeleton = {};

    links.forEach(({ id, label }) => {
        linksDBSkeleton[id] = {};
        linksDBSkeleton[id].total = 0;
        linksDBSkeleton[id].totalByDate = {};
        linksDBSkeleton[id].label = label;
    });

    return linksDBSkeleton;
};

export default formatLinksDBSkeleton;
