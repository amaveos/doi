import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './_modules/material.module';
import { NguCarouselModule } from '@ngu/carousel';

import { DrawerService } from './_services/drawer.service';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PuntosDeVentaComponent } from './components/puntos-de-venta/puntos-de-venta.component';
import { DetalleDelProductoComponent } from './components/detalle-del-producto/detalle-del-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ProductosComponent,
    ContactenosComponent,
    PuntosDeVentaComponent,
    DetalleDelProductoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NguCarouselModule
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
