# AriMAyo exercice Frontend

## Exercice d'entrainement

Dans le cadre du développement de la plateforme mobile et Web sur la thématique recrutement, nous comptons Mettre en ligne un interface utilisateur Web basée sur le framework NextJS et la bibliothèque de composants Ant Design.

Les livrables du projet sont la réalisation d'une application Javascript/NextJS qui comprend :

- Une page web simple comprenant un formulaire destiné aux candidats, où ils peuvent renseigner leurs informations personnelles,
- Une page web simple destiné aux recruteurs, comprenant un liste des candidats,
- Une page web simple destiné aux recruteurs, comprenant les détails d'un candidats selectionné,
- Ficher de Theme pour harmoniser les interfaces.

### Exigences :
- La gestion des états (state management) avec Redux,
- NextJS 14 avec App router,
- Bibliothèque de composants UI Ant Design,
- Transaltions des textes en plusieurs langues,
- Utilisation de Visual Studio Code (VSCode),
- Conception du module avec des diagrammes UML sur DrawIO,
- Suivi de la réalisation, du début jusqu'à la fin, sur un repo Github public.
- Un fichier README avec explication de comment exécuter le code.

## Prérequis

Assurez-vous d'avoir installé les outils suivants sur votre machine :
- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [pnpm](https://pnpm.io/) (gestionnaire de paquets performant)

## Installation

1. Clonez ce dépôt sur votre machine :
   ```bash
   git clone <url-du-depot>
   ```
2. Naviguez dans le dossier du projet :
   ```bash
   cd <nom-du-dossier>
   ```
3. Installez les dépendances :
   ```bash
   pnpm i
   ```

## Lancer le serveur de développement

Pour démarrer le serveur en mode développement, exécutez :
```bash
pnpm dev
```

Le serveur sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

## Scripts supplémentaires

- **Build** : Construire le projet pour la production :
  ```bash
  pnpm build
  ```

- **Start** : Lancer le serveur en mode production (après un build) :
  ```bash
  pnpm start
  ```

