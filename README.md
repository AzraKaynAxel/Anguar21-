# Tpbinding 🚀

## Description 📋

**Résumé 📝:** Ce dépôt contient un projet Angular 21+ avec Server-Side Rendering (SSR) pour une application web complète permettant de consulter des films, des informations sur le site et de gérer les erreurs avec une navigation fluide et des modules spécialisés.

## Prérequis ✅

- **Environnement:** Node.js avec npm prêt à l'emploi.
- **Version Node:** Node.js 18+ (recommandé).
- **Angular CLI:** Version 21.1.1+
- **Dépendances principales ⚙️:**
  - `@angular/core` pour le framework Angular.
  - `@angular/router` pour la gestion des routes et du routing.
  - `@angular/platform-browser-dynamic` pour le rendu côté client.
  - `@angular/platform-server` pour le Server-Side Rendering (SSR).
  - `express` pour le serveur SSR.
  - `cypress` pour les tests E2E.

## Détails des fonctionnalités implémentées 🚧

### Composants Standalone 🧭

**Répertoire:** `./src/app/site/`

Le projet utilise l'architecture **standalone components** (composants autonomes) pour une meilleure modularité et performance.

#### HomeComponent (`home/home.ts`)

Composant racine de la page d'accueil du site.

- **Fichiers associés:**
  - `home.html` - Template HTML
  - `home.css` - Styles spécifiques
  - `home.spec.ts` - Tests unitaires
  - `home-module.ts` - Déclarations du module

#### FilmsComponent (`films/films.ts`)

Composant pour l'affichage et la gestion de la liste des films.

- **Fichiers associés:**
  - `films.html` - Template HTML
  - `films.css` - Styles spécifiques
  - `films.spec.ts` - Tests unitaires
  - `films-module.ts` - Déclarations du module

#### AboutComponent (`about/about.ts`)

Composant pour les informations "À propos" du site.

- **Fichiers associés:**
  - `about.html` - Template HTML
  - `about.css` - Styles spécifiques
  - `about.spec.ts` - Tests unitaires
  - `about-module.ts` - Déclarations du module

#### ErrorsComponent (`errors/errors.ts`)

Composant pour la gestion centralisée des erreurs.

- **Fichiers associés:**
  - `errors.html` - Template HTML
  - `errors.css` - Styles spécifiques
  - `errors.spec.ts` - Tests unitaires
  - `errors-module.ts` - Déclarations du module

## Routes 🛣️

**Répertoires:** 
- `./src/app/app.routes.ts` - Routes client
- `./src/app/app.routes.server.ts` - Routes serveur SSR

Les routes sont organisées par domaine fonctionnel et font appel aux composants correspondants:

| Route | Composant | Fichier | Description |
|-------|-----------|---------|-------------|
| `/` | HomeComponent | `site/home/` | Page d'accueil |
| `/films` | FilmsComponent | `site/films/` | Galerie et détails des films |
| `/about` | AboutComponent | `site/about/` | Informations sur le site |
| `/errors` | ErrorsComponent | `site/errors/` | Gestion centralisée des erreurs |

## Services (Business Logic) 💼

**Répertoire:** À créer selon les besoins (`./src/app/services/`)

Les services contiennent la logique métier et interagissent avec les API ou l'état de l'application. Ils sont injectés dans les composants via le système d'injection de dépendances d'Angular.

| Service | Fichier | Fonctions principales | Dépendances |
|---------|---------|----------------------|-------------|
| **FilmService** | `film.service.ts` (à créer) | `getAllFilms()`, `getFilmById()`, `createFilm()`, `updateFilm()`, `deleteFilm()` | HttpClient |
| **ConfigService** | `config.service.ts` (à créer) | `getAppConfig()`, `getSiteInfo()` | HttpClient |
| **ErrorService** | `error.service.ts` (à créer) | `logError()`, `getErrors()`, `clearErrors()` | - |

## Structure du projet 📁

```
tpbinding/
├── angular.json
├── cypress.config.ts
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── public/
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   ├── styles.css
│   └── app/
│       ├── app.ts
│       ├── app.html
│       ├── app.css
│       ├── app.spec.ts
│       ├── app.config.ts
│       ├── app.config.server.ts
│       ├── app.routes.ts
│       ├── app.routes.server.ts
│       └── site/
│           ├── home/
│           │   ├── home.ts
│           │   ├── home.html
│           │   ├── home.css
│           │   ├── home.spec.ts
│           │   └── home-module.ts
│           ├── films/
│           │   ├── films.ts
│           │   ├── films.html
│           │   ├── films.css
│           │   ├── films.spec.ts
│           │   └── films-module.ts
│           ├── about/
│           │   ├── about.ts
│           │   ├── about.html
│           │   ├── about.css
│           │   ├── about.spec.ts
│           │   └── about-module.ts
│           └── errors/
│               ├── errors.ts
│               ├── errors.html
│               ├── errors.css
│               ├── errors.spec.ts
│               └── errors-module.ts
├── cypress/
│   ├── fixtures/
│   ├── support/
│   └── e2e/
└── .git/
```

## Lancement de l'application 🚀

### 1️⃣ Installation des dépendances

```bash
npm install
```

### 2️⃣ Démarrer l'application en développement

**Mode développement (avec watch automatique):**
```bash
npm start
```

ou

```bash
ng serve
```

L'application sera accessible sur `http://localhost:4200/`

### 3️⃣ Mode SSR (Server-Side Rendering)

**Compiler avec SSR:**
```bash
ng build
```

**Démarrer le serveur SSR:**
```bash
node dist/tpbinding/server/main.js
```

L'application sera accessible sur `http://localhost:4000/`

## Commandes disponibles 🛠️

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de développement (port 4200) |
| `npm test` | Exécute les tests unitaires avec Vitest |
| `ng build` | Compile le projet pour la production |
| `ng build --ssr` | Compile le projet avec SSR activé |
| `ng e2e` | Exécute les tests E2E avec Cypress |
| `ng generate component <name>` | Génère un nouveau composant standalone |
| `ng generate service <name>` | Génère un nouveau service |

## 📍 Endpoints et Routes disponibles

Une fois démarrée, l'application est accessible sur `http://localhost:4200/`:
- `/` - Page d'accueil
- `/films` - Galerie des films
- `/about` - Informations sur le site
- `/errors` - Gestion des erreurs

## Tests 🧪

### Tests unitaires

Exécuter les tests unitaires avec Vitest:

```bash
npm test
```

Les fichiers de test se terminent par `.spec.ts` et sont colocalisés avec les composants.

### Tests E2E (End-to-End)

Exécuter les tests E2E avec Cypress:

```bash
ng e2e
```

Les tests E2E se trouvent dans le répertoire `./cypress/`.

## Technologies utilisées 🛠️

- **Angular:** 21.1.1+
- **Node.js:** 18+
- **TypeScript:** Latest
- **Testing:** Vitest (tests unitaires), Cypress (tests E2E)
- **Server-Side Rendering:** Express.js + @angular/platform-server
- **Dépendances principales:**
  - `@angular/core`
  - `@angular/router`
  - `@angular/platform-browser`
  - `@angular/platform-server`
  - `express`
  - `cypress`

## Notes additionnelles 📌

- Le projet utilise les **Standalone Components** d'Angular 14+, sans dépendre des NgModules.
- Le **Server-Side Rendering (SSR)** est configuré pour améliorer les performances et le SEO.
- Les routes sont partagées entre le client et le serveur via `app.routes.ts` et `app.routes.server.ts`.
- Le projet utilise **Cypress** pour les tests E2E (au lieu d'Protractor qui est déprécié).
- Les styles CSS sont colocalisés avec les composants pour une meilleure modularité.