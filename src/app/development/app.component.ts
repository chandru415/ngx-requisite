import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {
  isDate,
  isNullOrUndefined,
  isObject,
  leadZeroForMonthOrDay,
  remaingDaysHoursFormTwoDate,
  requisiteValidators,
} from 'projects/ngx-requisite/src/public-api';

import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-requisite';
  devForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  public get controls() {
    return this.devForm.controls;
  }

  constructor(private fb: FormBuilder) {
    this.buildReactiveForm();
  }

  ngOnInit(): void {
    console.log(isNullOrUndefined(null), 'isNullOrUndefined(null)');
    console.log(isDate(new Date()), 'isDate');
    console.log(isObject(null), 'isObject');
    console.log(leadZeroForMonthOrDay(9), 'leadZeroForMonthOrDay(null)');
    console.log(
      remaingDaysHoursFormTwoDate(new Date('2021/12/10'), new Date()),
      'leadZeroForMonthOrDay(null)'
    );
  }

  /** Build form for testing */
  buildReactiveForm = () => {
    this.devForm = this.fb.group({
      userName: ['', [requisiteValidators.decimalPrecision(2)]],
    });
  };
}
