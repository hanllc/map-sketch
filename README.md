# MapSketch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## -----------

## Set correct base url for serverless production

<base href="https://wehrli0ngweb.blob.core.windows.net/ngsketch">

https://dzone.com/articles/create-a-serverless-angular-app-with-azure-functio

## Build for production

ng build --prod --aot 

## Upload to Azure with AZCopy

AzCopy /Source:C:\Users\wehrli\Source\Repos\tyler\map-sketch\dist /Dest:https://wehrli0ngweb.blob.core.windows.net/ngsketch /DestKey:KEY /SetContentType /S

https://docs.microsoft.com/en-us/azure/storage/storage-use-azcopy

https://stackoverflow.com/questions/19931111/azcopy-set-the-file-content-type

## Enable local function development and testing

npm i -g azure-functions-core-tools

https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local

https://www.npmjs.com/package/azure-functions-core-tools

https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs

## ESRI Java Script API and Angular

Did not use - apparenty no compat with static analysis in webpack/angular-cli (begin)

https://github.com/Esri/esri-system-js

use the systemjs plugin for dojo

https://github.com/beginor/systemjs-plugin-dojo

npm i systemjs-plugin-dojo

Did not use (end)

Found some others but iframe looked easier for now


