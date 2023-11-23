import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { HomeComponent } from './home/home.component';
import { Author2Component } from './author2/author2.component';
import { Author1Component } from './author1/author1.component';
import { Author3Component } from './author3/author3.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/first',
    component: FirstComponent
  },
  {
    path: 'home/second',
    component: SecondComponent
  },
  {
    path: 'home/third',
    component: ThirdComponent
  },
  {
    path: 'home/second/author2',
    component: Author2Component
  },
  {
    path: 'home/first/author1',
    component: Author1Component
  },
  {
    path: 'home/third/author3',
    component: Author3Component
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
