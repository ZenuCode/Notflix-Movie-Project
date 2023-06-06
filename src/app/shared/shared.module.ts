import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { Step1Component } from './register/step1/step1.component';
import { Step2Component } from './register/step2/step2.component';
import { Step3Component } from './register/step3/step3.component';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LocalStorageService } from '../core/localStorage';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomepageComponent,
    RegisterComponent,
    SignInComponent,
    MovieListComponent,
    MovieDetailsComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    InfiniteScrollModule,
  ],
  providers: [
    LocalStorageService
  ],
})
export class SharedModule { }
