import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { NewContainerComponent } from './new-container/new-container.component';
import { CovidApiComponent } from './covid-api/covid-api.component'


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';


const appRoutes : Routes = [
  { path : '' , component : HomeComponent },
  { path : 'covid-api' , component : CovidApiComponent },
  { path : 'new' , component : NewContainerComponent },
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewContainerComponent,
    CovidApiComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
