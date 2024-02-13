# Remix with IBM-Carbon Design System

## Setup Remix

Start with creating remix project wih vite template

```shell
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

Add `sass` / `scss` support

```shell
npm i -D sass
```

Add `npm-run-all` to run multiple npm scripts

```shell
npm i -D npm-run-all
```

Add `copyfiles`

```shell
npm install -D copyfiles
```

## Adding IBM-Carbon

Add IBM-Carbon

```shell
npm install @carbon/react
```

Add npm script to watch / build scss changes to css

```json
  "scripts": {
    "copy-ibm-fonts": "copyfiles --soft --up 3 \"node_modules/@ibm/plex/IBM-Plex-Sans/**/*\" \"public/styles/~@ibm/plex/\"",
    "build:sass": "sass -s compressed --no-source-map --load-path=node_modules app/:public/",
    "build:app": "remix vite:build",
    "build": "run-p copy-ibm-fonts build:sass build:app",
    "dev:sass": "sass --load-path=node_modules --watch app/:public/",
    "dev:app": "remix vite:dev",
    "dev": "run-p copy-ibm-fonts dev:sass dev:app",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "start": "remix-serve ./build/server/index.js",
    "typecheck": "tsc"
  }
```

Add a global stylesheet `app/styles/main.scss`

```scss
use '@carbon/react';
```

Update `app/root.tsx` to use the stylesheet

```tsx
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles/main.css" },
];
```

Copy the font folder `node_modules/@ibm/plex/IBM-Plex-Sans` to folder `public/styles/~@ibm/plex` to address the 404 issues
