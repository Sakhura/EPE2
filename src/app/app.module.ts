import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Espacio1Component } from './espacio1/espacio1.component';
import { Espacio2Component } from './espacio2/espacio2.component';
import { Espacio3Component } from './espacio3/espacio3.component';
import { Espacio4Component } from './espacio4/espacio4.component';
import { Espacio5Component } from './espacio5/espacio5.component';
import { Espacio6Component } from './espacio6/espacio6.component';




@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Espacio1Component, 
    Espacio2Component,
    Espacio3Component,
    Espacio4Component,
    Espacio5Component,
    Espacio6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
