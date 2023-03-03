import { Component, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DrawerService } from './_services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doi';

  @ViewChild('drawer') public drawer!: MatDrawer;

  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  diviceXs!: boolean;

  constructor(private router: Router, public mediaObserver: MediaObserver, private drawerService: DrawerService) {

  }

  ngOnInit(): void {
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

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer);
  }

  toggleDrawer() {
    this.drawerService.toggle();
  }
}
