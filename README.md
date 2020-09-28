# idm-mat-loader

An angular material global progress loader that uses http interceptor and gives success/error feedback on non GET actions.
This component uses the angular material 3 colors: primary, accent, and warn according to your material theme colors.

Demo: [StackBlitz https://idm-mat-loader.stackblitz.io](https://idm-mat-loader.stackblitz.io)

![idm-mat-loader](./idm-mat-loader.gif)

## Installation

This package depends on `@angular/material` so first:
```
npm install --save @angular/material @angular/cdk
```
To choose angular theme if not already, run the following and choose *Yes* when it asks *Set up browser animations for Angular Material?*:
```
ng add @angular/material
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