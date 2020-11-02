import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component'
import { NewsletterComponent } from './newsletter.component';
import { ProgramsComponent } from './programs.component';
import { FacultyComponent } from './faculty.component';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NewsletterComponent,
    ProgramsComponent,
    FacultyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
