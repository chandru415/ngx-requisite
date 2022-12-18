
# NgxRequisite
ngx-requisite library - custom Validators, Utility functions for common development.

# Installation

```bash
npm i @slck/ngx-requisite --save
```
# Methods 
    - isNullOrUndefined
    - isDate
    - isObject
    - leadZeroForMonthOrDay
    - remainingDaysHoursFormTwoDates
    - toCamelCaseKeys

# Pipes
    - safeHtml
    - safeUrl
# Validators

## Requisite validators
```
- whitespace
- isNegative
- decimalPrecision
- lessthan
- lessthan or equal
- greaterthan
- greaterthan or equal
```
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
import { requisiteValidators } from '@slck/ngx-requisite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

### toCamelCaseKeys

```typescript
import { toCamelCaseKeys } from '@slck/ngx-requisite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    const uncap = toCamelCaseKeys({
      Name: '@slck/ngx-requisite',
      Address: {
        Home: 'uhi'
      },
      Urls: [
        {Path: 'google', Location: 'us'}
      ]
    })
  }
}

 -- output: 
    {
      name: '@slck/ngx-requisite',
      address: {
        home: 'uhi'
      },
      urls: [
        {Path: 'google', Location: 'us'}
      ]
    }

```

# For developers
To run the project : `npm start`
Don't forget to run `npm test` and `npm lint` before each pull request. Thanks !
