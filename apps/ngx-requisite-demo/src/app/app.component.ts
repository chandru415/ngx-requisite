import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { toCamelCaseKeys } from '@slck/ngx-requisite';


@Component({
  selector: 'ngx-requisite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {

  title = 'ngx-requisite-demo';

  personFg = new FormGroup({
    name: new FormControl<string>('')
  })

  get controls() {
    return this.personFg.controls
  }

  ngOnInit(): void {
    this.test();
  }

  test = () => {
    const uncap = toCamelCaseKeys({
      Name: 'chandu',
      Address: {
        Home: 'uhi'
      },
      Urls: [
        {Path: 'google', Location: 'us'}
      ]
    })

    console.log(uncap);

    console.log(this.controls.name.value);

  }

}
