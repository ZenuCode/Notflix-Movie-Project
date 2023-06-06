import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Step1Component } from './register/step1/step1.component';
import { Step2Component } from './register/step2/step2.component';
import { Step3Component } from './register/step3/step3.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
