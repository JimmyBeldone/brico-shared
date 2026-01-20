# Infos en communs entre les applications Brico

Chaque dépot Brico possède un ID unique, en interne ils utilisent des IDs dits "legacy" et "easier".

Chaque dépot appartient a un bassin (ex: "Discounter", "Disc_H1000", "GSB").

Les bassins ont chacun des prix différents, et la typologie des produits peut changer d'un bassin à un autre (voir d'un dépot à l'autre même si ils appartiennent au même bassin).

Les différentes applications vont chercher les ids et les bassins d'appartenance des dépots dans une liste commune.

## Liste des dépots et leur bassin d'appartenance :

La liste des dépots se trouve ici : `src/storesListCompleted.js`

Un dépot aura cette forme :

```json

{
    id: 1942, // ID du dépot utilisé dans les apps et dans Firebase (code id legacy)
    legacy: 1942,
    easier: 2443,
    label: 'ST QUENTIN', // ville du dépot
    region: 'NORD EST',
    bassin: 'Discounter',
}

```

C'est dans ce fichier qu'on apporte d'éventuelle modifications.
Une fois des modifications apportées (ex: changement de bassin pour un dépot), il faut lancer le script suivant pour générer un json à la racine du repot git, qui sera accessible pour les autre apps lors de leur build.

**Lancer le script :**

`yarn generate-list`

-> génère `listWithLabel.json` à la racine du projet

## Autres scripts

Les autres scripts servent à générer des skeletons de formats attendus par Firebase pour la gestion des back offices des apps.

Les back offices étant en place, ils n'ont pas d'utlité pour le moment à part voir et comprendre les paramètres attendus par les stores Firebase.

(ex du store pour le back office electroportatif : `src/electroportatif/storeSkeleton.json`)