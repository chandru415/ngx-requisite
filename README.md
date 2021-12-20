
<p align="center">
 <h2 align="center">NgxRequisite</h2>
 <p align="center">ngx-requisite library => custom Validators, Utility functions for common development.</p>
 <br/>
 <p align="center">
 <img src="https://img.shields.io/github/issues/chandru415/ngx-requisite" />
 <img src="https://img.shields.io/github/forks/chandru415/ngx-requisite" />
   <img src="https://img.shields.io/github/stars/chandru415/ngx-requisite" />
  
  <a href="https://www.npmjs.com/package/ngx-requisite">
   <img src="https://img.shields.io/npm/dw/ngx-requisite" />
 </a>
 </p>
</p>
<br/>

# Installation

```bash
npm i ngx-requisite --save
```
# Methods 
    - isNullOrUndefined
    - isDate
    - isObject
    - leadZeroForMonthOrDay
    - remainingDaysHoursFormTwoDates
# Validators

## Requisite validators

- whitespace
- isNegative
- decimalPrecision

# Usage

## Model driven

import `ReactiveFormsModule` in *app.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

import `CustomValidators` in *app.component.ts*

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { requisiteValidators } from 'ngx-requisite';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent {
  devForm = this.fb.group({
    userName: ['', [requisiteValidators.whitespace]],
  });

  get controls(){
    return this.devForm.controls;
  }

  constructor(private fb: FormBuilder) {}
}
```

```html
<form [formGroup]="form">
  <input type="text" name="" id="" formControlName="userName" />
  <div class="" *ngIf="controls.userName.hasError('whitespace')">having space</div>
</form>
```

### isNegative

```typescript
new FormControl('', requisiteValidators.isNegative)
```

### decimalPrecision

```typescript
new FormControl('',requisiteValidators.decimalPrecision)
```
# For developers
To run the project : `npm start`
Don't forget to run `npm test` and `npm lint` before each pull request. Thanks !
