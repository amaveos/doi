import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos-de-venta',
  templateUrl: './puntos-de-venta.component.html',
  styleUrls: ['./puntos-de-venta.component.scss']
})
export class PuntosDeVentaComponent {

  listadoPuntosDeVenta: any[] = [
    {
      nombre:"ALMACENES ESTRELLA (MEDELLIN, SANTA MARTA, FUNDACION)",
      direccion:"CRA 68 # 97 38 MEDELLIN"
    },
    {
      nombre:"ALMACENES LA MEDIA NARANJA",
      direccion:"CRA 52 # 48 02 MEDELLIN"
    },
    {
      nombre:"SURTIDORA EL UNIVERSO DE LA MODA",
      direccion:"CRA 3 # 13ª 29 IBAGUE"
    },
    {
      nombre:"SURTIDORA PANTY JEAN",
      direccion:"CRA 3 # 15 104 IBAGUE"
    },
    {
      nombre:"EL PALACIO DE LA PANTALETA",
      direccion:"CALLE 23 # 20 64 SINCELEJO"
    },
    {
      nombre:"ALMACEN ESTRENO",
      direccion:"CALLE LA MODENA # 7 156 CARTAGENA"
    },
    {
      nombre:"ALMACENES HERPO",
      direccion:"CRA 56 # 18ª 80 LOCAL 40 CAÑAVERALES CALI"
    },
    {
      nombre:"ALMACEN Y DISTRIBUIDORA GONZALEZ",
      direccion:"CRA 42 # 32 28 BARRANQUILLA"
    },
    {
      nombre:"TEJIDOS FAS",
      direccion:"CALLE 19 # 20 31 MANIZALEZ"
    },
    {
      nombre:"DAGO MONTES",
      direccion:"CRA 8 # 13 81, LOCAL 219, CENTRO COMERCIAL CALI CENTRO "
    },
    {
      nombre:"SUPERMERCADOS MERCACENTRO",
      direccion:"CRA 4ª # 7 04 VIA CENTRAL BARRIO CENTRO ESPINAL TOLIMA",
    },
    {
      nombre:"SUPERMERCADOS MERCACENTRO",
      direccion:"CALLE 20 # 11 SUR 47 50 BARRIO RICAUTER IBAGUE",
    },
    {
      nombre:"ALAMCENES MINI PRECIO Y ALAMCENES SURTY BABY",
      direccion:"(PLANETA RICA, SAHAGUN, LORICA, SINCELEJO, VALLEDUPAR)",
    }
  ]

}
