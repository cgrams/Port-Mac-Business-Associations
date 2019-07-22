import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import 'hammerjs';

import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContentmajorComponent } from './contentmajor/contentmajor.component';
import { WhoweareComponent } from './whoweare/whoweare.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ContentmajorComponent,
    WhoweareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ParallaxModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatSidenavModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
