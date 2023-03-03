import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  

  private drawer!: MatDrawer ;

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle() {
    this.drawer.toggle();
    console.log("vol")
  }
}
