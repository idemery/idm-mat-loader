# idm-mat-loader

An angular material global progress loader that uses http interceptor and gives success/error feedback on non GET actions.

![idm-mat-loader](./idm-mat-loader.gif)

## Installation

This package depends on `@angular/material` so first:
```
npm install --save @angular/material @angular/cdk
```

To install `idm-mat-loader` run:
```
npm i idm-mat-loader
```

## Getting started
In your module include the following import:
```javascript
import { MatLoaderModule } from 'idm-mat-loader';
```
add **MatLoaderModule** to the imports:
```javascript
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatLoaderModule // <-- here
  ],
```

## Usage

Just include `<idm-mat-loader></idm-mat-loader>` at the top of your layout/container.