import { Component, OnInit } from '@angular/core';
import { toCamelCaseKeys } from '@ngx-requisite/ngx-requisite';

@Component({
  selector: 'ngx-requisite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {

  title = 'ngx-requisite-demo';

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

  }

}
