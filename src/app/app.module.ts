import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Mis componentes
import { Pendientes } from "../pages/pendientes/pendientes.component";
import { Terminados } from "../pages/terminados/terminados.component";

//mis servicios
import { ListaTareasService } from "./services/listatareas-service";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    Pendientes,
    Terminados
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    Pendientes,
    Terminados
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaTareasService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
