import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRequisiteModule } from '@slck/ngx-requisite';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, NgxRequisiteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
