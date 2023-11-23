import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { NavbarComponent } from './navbar/navbar.component';
import { H3styleDirective } from './h3style.directive';
import { IngedientleftDirective } from './ingedientleft.directive';
import { IngedientrightDirective } from './ingedientright.directive';
import { Author2Component } from './author2/author2.component';
import { Author1Component } from './author1/author1.component';
import { Author3Component } from './author3/author3.component';
import { AuthorheadingDirective } from './authorheading.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavbarComponent,
    H3styleDirective,
    IngedientleftDirective,
    IngedientrightDirective,
    Author2Component,
    Author1Component,
    Author3Component,
    AuthorheadingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
