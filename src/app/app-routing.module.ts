import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My Component

import { HomePageComponent } from './components/home-page/home-page.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewStudiesComponent } from './components/studies/new-studies.component';
import { EditStudiesComponent } from './components/studies/edit-studies.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';

// Services
import { GuardService } from './guards/guard.service'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nskill', component: NewSkillComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'eskill/:id', component: EditSkillComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'nstudy', component: NewStudiesComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'estudy/:id', component: EditStudiesComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'nexperience', component: NewExperienceComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'eexperience/:id', component: EditExperienceComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: 'eprofile/:id', component: EditProfileComponent, canActivate: [GuardService], data: { expectedRol: ['admin'] } },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
