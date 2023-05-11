import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MecvComponent } from './cv/mecv/mecv.component';
import { AboutmeComponent } from './cv/aboutme/aboutme.component';
import { SkillsmeComponent } from './cv/skillsme/skillsme.component';
import { ExperiencemeComponent } from './cv/experienceme/experienceme.component';
import { EducationmeComponent } from './cv/educationme/educationme.component';
import { PortfoliomeoneComponent } from './cv/portfoliomeone/portfoliomeone.component';
import { ContactmeoneComponent } from './cv/contactmeone/contactmeone.component';
import { AboutmeoneComponent } from './cvone/aboutmeone/aboutmeone.component';
import { ContactmetwoComponent } from './cvone/contactmetwo/contactmetwo.component';
import { EducationmeoneComponent } from './cvone/educationmeone/educationmeone.component';
import { ExperiencemeoneComponent } from './cvone/experiencemeone/experiencemeone.component';
import { MecvoneComponent } from './cvone/mecvone/mecvone.component';
import { PortfoliometwoComponent } from './cvone/portfoliometwo/portfoliometwo.component';
import { SkillsmeoneComponent } from './cvone/skillsmeone/skillsmeone.component';
import { ContainerComponent } from './cvone/container/container.component';
import { ContaineroneComponent } from './cv/containerone/containerone.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThecvComponent } from './thecv/thecv.component';
import { FormcvComponent } from './formcv/formcv.component';
import { GeneratorsComponent } from './generators/generators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutMeFormComponent } from './Forms/about-me-form/about-me-form.component';
import { CvtemplateoneComponent } from './cvtemplateone/cvtemplateone.component';
import { CvtemplatetwoComponent } from './cvtemplatetwo/cvtemplatetwo.component';
import { ChooseComponent } from './choose/choose.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MecvComponent,
    AboutmeComponent,
    SkillsmeComponent,
    ExperiencemeComponent,
    EducationmeComponent,
    PortfoliomeoneComponent,
    ContactmeoneComponent,
    AboutmeoneComponent,
    ContactmetwoComponent,
    EducationmeoneComponent,
    ExperiencemeoneComponent,
    MecvoneComponent,
    PortfoliometwoComponent,
    SkillsmeoneComponent,
    ContainerComponent,
    ContaineroneComponent,
    LoginComponent,
    RegisterComponent,
    ThecvComponent,
    FormcvComponent,
    GeneratorsComponent,
    AboutMeFormComponent,
    CvtemplateoneComponent,
    CvtemplatetwoComponent,
    ChooseComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
