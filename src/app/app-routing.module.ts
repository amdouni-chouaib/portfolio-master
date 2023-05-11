import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './cvone/container/container.component';
import { AboutmeoneComponent } from './cvone/aboutmeone/aboutmeone.component';
import { EducationmeoneComponent } from './cvone/educationmeone/educationmeone.component';
import { ExperiencemeoneComponent } from './cvone/experiencemeone/experiencemeone.component';
import { MecvoneComponent } from './cvone/mecvone/mecvone.component';
import { PortfoliometwoComponent } from './cvone/portfoliometwo/portfoliometwo.component';
import { SkillsmeoneComponent } from './cvone/skillsmeone/skillsmeone.component';
import { ContactmetwoComponent } from './cvone/contactmetwo/contactmetwo.component';
import { AboutmeComponent } from './cv/aboutme/aboutme.component';
import { EducationmeComponent } from './cv/educationme/educationme.component';
import { ExperiencemeComponent } from './cv/experienceme/experienceme.component';
import { MecvComponent } from './cv/mecv/mecv.component';
import { PortfoliomeoneComponent } from './cv/portfoliomeone/portfoliomeone.component';
import { SkillsmeComponent } from './cv/skillsme/skillsme.component';
import { ContactmeoneComponent } from './cv/contactmeone/contactmeone.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GeneratorsComponent } from './generators/generators.component';
import { CvtemplateoneComponent } from './cvtemplateone/cvtemplateone.component';
import { ThecvComponent } from './thecv/thecv.component';

const routes: Routes = [
  {path:"portfolioone",component:CvtemplateoneComponent},
  {path:"container",component:ContainerComponent},

 
    {path:"aboutmeone",component:AboutmeoneComponent},
    {path:"education",component:EducationmeoneComponent},
    {path:"experience",component:ExperiencemeoneComponent},
    {path:"intro",component:MecvoneComponent},
    {path:"portfolio",component:PortfoliometwoComponent},
    {path:"skills",component:SkillsmeoneComponent},
    {path:"contact",component:ContactmetwoComponent},

 
  {path:"seccontainer",component:ContainerComponent,    title: 'container two',

  children:[
    {path:"aboutmeone",component:AboutmeComponent},
    {path:"education",component:EducationmeComponent},
    {path:"experience",component:ExperiencemeComponent},
    {path:"intro",component:MecvComponent},
    {path:"portfolio",component:PortfoliomeoneComponent},
    {path:"skills",component:SkillsmeComponent},
    {path:"contact",component:ContactmeoneComponent},

  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"make",component:GeneratorsComponent},
  {path:"cv",component:ThecvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
