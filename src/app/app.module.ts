import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { ROUTES, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
