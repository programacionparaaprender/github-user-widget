# github-uset-widget


### crear librería
ng generate library githubUserWidget -p=guw

### instalar para github
npm install proyecto-1b-api-github

### luego agregar al package de la librería
"peerDependencies": {
    "@angular/common": "^15.1.0",
    "@angular/core": "^15.1.0",
    "proyecto-1b-api-github": "^1.1.0"
  },
### luego en el ng-package.json
"lib": {
    "entryFile": "src/public-api.ts",
    "umdModuleIds": {
      "proyecto-1b-api-github": "^1.1.0"
    }
  }
### luego borrar
.spec.ts
.component.html
.component.css
.component.ts
.service.ts

### ir a la carpeta lib
cd projects/github-user-widget/src/lib/

### ejecutamos
ng g c components/usuario --skipTests=true --inlineStyle=true

### buscador usuario
ng g c components/buscador-usuario --skipTests=true --inlineStyle=true

### servicio buscador usuario
ng g s services/buscador-usuario --skipTests=true --inlineStyle=true

### luego añadirlo al public-api.ts
export * from './lib/services/buscador-usuario.service';

### crear carpeta interfaces y usuario.interface.ts
interfaces/usuario.interface.ts

### luego añadirlo al public-api.ts
export * from './lib/interfaces/usuario.interface';

### crear dentro de lib
assets/styles/styles.css

### importarlo al styles.scss global
/* You can add global styles to this file, and also import other style files */
@import './../projects/github-user-widget/src/lib/assets/styles/styles.css';
