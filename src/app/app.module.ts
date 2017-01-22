import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { BtnsComponent } from './btns/btns.component';
import { BtnComponent } from './btn/btn.component';
import { SettingsComponent } from './settings/settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBnjFCrUmaPa6bZLbZxi9kNdTQJlaYuy-w",
  authDomain: "coursite1.firebaseapp.com",
  databaseURL: "https://coursite1.firebaseio.com",
  storageBucket: "coursite1.appspot.com",
  messagingSenderId: "1093987049287"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavComponent,
    BtnsComponent,
    BtnComponent,
    SettingsComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
