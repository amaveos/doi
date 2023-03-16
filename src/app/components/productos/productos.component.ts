import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DetalleDelProductoComponent } from '../detalle-del-producto/detalle-del-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  listaProductosByCategoria: any[] = [
    {
      categoria: "bebes",
      productos: [
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4157.jpg",
          title: "PIJAMA BEBE NIÑO MANGA CORTA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV3465.jpg",
          title: "PIJAMA BEBE NIÑA MANGA CORTO PANTALON",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4472.jpg",
          title: "PIJAMA BEBE NIÑO MANGA LARGA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV3752.jpg",
          title: "PIJAMA BEBE NIÑA MANGA LARGA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4410.jpg",
          title: "PIJAMA BEBE NIÑO MANGA CORTA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV3748.jpg",
          title: "PIJAMA BEBE NIÑA MANGA CORTO PANTALON",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4533.jpg",
          title: "PIJAMA BEBE NIÑO MANGA LARGA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV3849.jpg",
          title: "PIJAMA BEBE NIÑA MANGA LARGA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4662.jpg",
          title: "PIJAMA BEBE NIÑO PERILLA MANGA CORTO PANTALON",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV4160.jpg",
          title: "PIJAMA BEBE NIÑA PERILLA MANGA CORTO PANTALON",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebes/_VMV3920.jpg",
          title: "PIJAMA BEBE NIÑA MANGA LARGA PANTALÓN",
          tallas: ["6/12", "12/18", "18/24", "24/36"],
          genero: "girl"
        }
      ]
    },
    {
      categoria: "bebitos",
      productos: [
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3336.jpg",
          title: "MAMELUCO BEBE NIÑA MANGA CORTA PANTALÓN",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3432.jpg",
          title: "MAMELUCO BEBE NIÑA MANGA LARGA PANTALÓN ",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3135.jpg",
          title: "MAMELUCO BEBE NIÑO MANGA LARGA PANTALÓN ",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3647.jpg",
          title: "MAMELUCO BEBE NIÑA MANGA LARGA PANTALÓN ",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3274.jpg",
          title: "MAMELUCO BEBE NIÑO MANGA LARGA PANTALÓN ",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/bebitos/_VMV3412.jpg",
          title: "MAMELUCO BEBE NIÑO MANGA LARGA PANTALÓN ",
          tallas: ["0/3", "3/6", "6/9", "9/12"],
          genero: "boy"
        }
      ]
    },
    {
      categoria: "niños",
      productos: [
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5548.jpg",
          title: "PIJAMA NIÑO MANGA CORTA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5636.jpg",
          title: "PIJAMA NIÑO MANGA LARGA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5696.jpg",
          title: "PIJAMA NIÑO MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5618.jpg",
          title: "PIJAMA NIÑO PERILLA MANGA CORTO PANTALON",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5582.jpg",
          title: "PIJAMA NIÑO MANGA CORTA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5670.jpg",
          title: "PIJAMA NIÑO MANGA LARGA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/ninos/_VMV5599.jpg",
          title: "PIJAMA NIÑO MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "boy"
        }
      ]
    },
    {
      categoria: "niñas",
      productos: [
        {
          urlImg: "../../../assets/imgs/ninas/_VMV4800.jpg",
          title: "PIJAMA NIÑA MANGA CORTA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV5042.jpg",
          title: "PIJAMA NIÑA MANGA LARGA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "grl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV4679.jpg",
          title: "PIJAMA NIÑA MANGA LARGA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "grl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV4739.jpg",
          title: "PIJAMA NIÑA MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV4823.jpg",
          title: "PIJAMA NIÑA BATOLA",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas//_VMV4920.jpg",
          title: "PIJAMA NIÑA MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV4965.jpg",
          title: "PIJAMA NIÑA MANGA LARGA PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "grl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV5027.jpg",
          title: "PIJAMA NIÑA MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV5043.jpg",
          title: "PIJAMA NIÑA MANGA LARGA BOLERO PANTALÓN",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV5044.jpg",
          title: "PIJAMA NIÑA MANGA CORTA SHORT",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/ninas/_VMV5042.jpg",
          title: "MANGA CORTA SHORT BOLERO",
          tallas: ["4", "6", "8", "10", "12", "14", "16"],
          genero: "girl"
        }
      ]
    },
    {
      categoria: "dama",
      productos: [
        {
          urlImg: "../../../assets/imgs/dama/_VMV5803.jpg",
          title: "PIJAMA DAMA MANGA CORTA SHORT",
          tallas: ["S", "M", "L", "XL"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/dama/_VMV5861.jpg",
          title: "PIJAMA DAMA MANGA LARGA PANTALON",
          tallas: ["S", "M", "L", "XL"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/dama/_VMV5733.jpg",
          title: "PIJAMA DAMA SISA SHORT",
          tallas: ["S", "M", "L", "XL"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/dama/_VMV5836.jpg",
          title: "PIJAMA DAMA TIRAS CAPRY",
          tallas: ["S", "M", "L", "XL"],
          genero: "girl"
        },
        {
          urlImg: "../../../assets/imgs/dama/_VMV5846.jpg",
          title: "PIJAMA DAMA MANGA CORTA SHORT",
          tallas: ["S", "M", "L", "XL"],
          genero: "girl"
        },
      ]
    },
    {
      categoria: "caballero",
      productos: [
        {
          urlImg: "../../../assets/imgs/caballero/_VMV5094.jpg",
          title: "PIJAMA HOMBRE MANGA CORTA SHORT",
          tallas: ["S", "M", "L", "XL"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/caballero/_VMV5138.jpg",
          title: "PIJAMA HOMBRE MANGA CORTA PANTALÓN",
          tallas: ["S", "M", "L", "XL"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/caballero/_VMV5788.jpg",
          title: "PIJAMA HOMBRE MANGA CORTA PERILLA PANTALÓN",
          tallas: ["S", "M", "L", "XL"],
          genero: "boy"
        },
        {
          urlImg: "../../../assets/imgs/caballero/_VMV5091.jpg",
          title: "PIJAMA HOMBRE MANGA LARGA PANTALÓN",
          tallas: ["S", "M", "L", "XL"],
          genero: "boy"
        }
      ]
    }
  ]

  listaProductosMostrar!: any;

  private destroyed$ = new Subject();

  selected = 'todo';

  boy: boolean = true;
  girl: boolean = true;
  url!: string;

  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  diviceXs!: boolean;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public mediaObserver: MediaObserver,
  ) { }


  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe((routeParams) => {
        // console.log(routeParams);
        this.listaProductosMostrar = this.listaProductosByCategoria.find(x => x.categoria === routeParams['category']);
        console.log(this.listaProductosMostrar)
        this.url = routeParams['category'];
        this.girl = true;
        this.boy = true;
      });

    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        // console.log('change', change[0].mqAlias);
        if (change[0].mqAlias === 'xs') {
          this.diviceXs = true;
        }
        else {
          // console.log("hola")
          this.diviceXs = false;
        }
      });

  }

  mostrarItems(event: any) {
    if (this.selected === "todo") {
      this.girl = true;
      this.boy = true;
    }
    else if (this.selected === "boy") {
      this.girl = false;
      this.boy = true;
    }
    else if (this.selected === "girl") {
      this.girl = true;
      this.boy = false;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  openDialog(producto: any): void {

    let relativeWidth = "35vw";
    let relativeHeight = "95vh";

    if(this.diviceXs){
      relativeWidth = "95vw";
      relativeHeight = "88vh"
    }
    else{
      relativeWidth = "35vw";
      relativeHeight = "95vh";
    }

    const dialogRef = this.dialog.open(DetalleDelProductoComponent, {
      data: producto,
      height: relativeHeight,
      width: relativeWidth,
      maxWidth:relativeWidth
    });
  }
}


