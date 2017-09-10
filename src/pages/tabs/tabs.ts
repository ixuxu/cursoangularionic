import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { Pendientes } from "../pendientes/pendientes.component";
import { Terminados } from "../terminados/terminados.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Pendientes;
  tab2Root = Terminados;
  tab3Root = AboutPage;

  constructor() {

  }
}
