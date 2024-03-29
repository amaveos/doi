import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PuntosDeVentaComponent } from './components/puntos-de-venta/puntos-de-venta.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'product/:category',
    component: ProductosComponent
  },
  {
    path: 'puntosDeVenta',
    component: PuntosDeVentaComponent
  },
  {
    path: 'contactenos',
    component: ContactenosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
