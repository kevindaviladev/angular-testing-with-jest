# Angular Test with Jest

En este ejemplo mostramos como usar Jest en Angular.

## Guía para instalar Jest

#### 1. Removemos las referencias a Jasmine y Karma

```code
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

#### 2. Instalamos Jest

```code
npm i -D jest jest-preset-angular @types/jest
```

#### 3. Creamos un archivo de config para Jest (En este caso config.jest.ts)

#### 4. Colocamos esto dentro de config.jest.ts

```code
import "jest-preset-angular/setup-jest";
```

#### 5. Y agregamos el objeto Jest en nuestro package.json

```code
"jest": {
"preset": "jest-preset-angular",
"setupFilesAfterEnv": [
"<rootDir>/config.jest.ts"
],
"moduleNameMapper": {
"@app/(.)": "<rootDir>/src/app/$1",
"@src/(.)": "<rootDir>/src/$1"
}
}
```

#### 6. Reemplazar el archivo tsconfig.spec.json

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest" // Antes iba "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```
