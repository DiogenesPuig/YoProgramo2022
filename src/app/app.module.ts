import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//login&register
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//experience
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';

//skill
import { SkillsComponent } from './components/skills/skills.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

//profile
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';

//studies
import { StudiesComponent } from './components/studies/studies.component';
import { EditStudiesComponent } from './components/studies/edit-studies.component';
import { NewStudiesComponent } from './components/studies/new-studies.component';

//
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    StudiesComponent,
    SkillsComponent,
    ExperienceComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditProfileComponent,
    EditStudiesComponent,
    NewStudiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
