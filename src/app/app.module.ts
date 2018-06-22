import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoverSearchComponent } from './nasa/rover/rover-search/rover-search.component';
import { RoverImagesComponent } from './nasa/rover/rover-images/rover-images.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {RoverDataFetchService} from "./nasa/rover/rover-data-fetch.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RoverCoreComponent } from './nasa/rover/rover-core/rover-core.component';

@NgModule({
  declarations: [
    AppComponent,
    RoverSearchComponent,
    RoverImagesComponent,
    RoverCoreComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RoverDataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
