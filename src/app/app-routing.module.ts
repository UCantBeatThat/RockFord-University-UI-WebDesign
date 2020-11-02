import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';
import { ContactComponent } from './contact.component';
import { FacultyComponent } from './faculty.component';
import { HomeComponent } from './home.component';
import { NewsletterComponent } from './newsletter.component'
import { ProgramsComponent } from './programs.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'admissions', component: AdmissionsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
