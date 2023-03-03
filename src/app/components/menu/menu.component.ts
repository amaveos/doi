import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DrawerService } from 'src/app/_services/drawer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  urlActive!:string;


  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  diviceXs!: boolean;

  constructor(private router: Router, public mediaObserver: MediaObserver,  public drawerService: DrawerService) {}

  ngOnInit(): void {
    this.detectarVista();

    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        
        if (change[0].mqAlias === 'xs') {
          this.diviceXs = true;
          console.log('HolaMund', change[0].mqAlias);
        }
        else {
          console.log("hola")
          this.diviceXs = false;
        }
      });
  }

 
  
  detectarVista() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        console.log("location.pathname", location.pathname)
        this.urlActive = location.pathname;
    });
  }
}
