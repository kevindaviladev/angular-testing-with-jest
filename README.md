
# Project Title

En este ejemplo mostramos como usar Jest en Angular.


## Guía para instalar Jest

#### Removemos las referencias a Jasmine y Karma

```code
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```
#### Instalamos Jest

```code
npm i -D jest jest-preset-angular @types/jest
```
#### Creamos un archivo de config para Jest (En este caso config.jest.ts)
#### Colocamos esto dentro de config.jest.ts
```code
import "jest-preset-angular/setup-jest";
```
#### Y agregamos el objeto Jest en nuestro package.json
```code
"jest": {
"preset": "jest-preset-angular",
"setupFilesAfterEnv": [
"<rootDir>/jest.config.ts"
],
"moduleNameMapper": {
"@app/(.)": "<rootDir>/src/app/$1",
"@src/(.)": "<rootDir>/src/$1"
}
}
```


