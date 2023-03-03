import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  @ViewChild('myCarouselCharacteristic') myCarouselCharacteristic!: NguCarousel<any>;
  @ViewChild('myCarouselCustomLog') myCarouselCustomLog!: NguCarousel<any>;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 4,
    interval: { timing: 4000, initialDelay: 5000 },
    loop: true,
    touch: true,
    velocity: 0.2
  }

  landscapeImg: any[] = [
    'url(../../../assets/imgs/slider1.jpg)',
    'url(../../../assets/imgs/slider2.jpg)',
    'url(../../../assets/imgs/slider3.jpg)',
    'url(../../../assets/imgs/slider4.jpg)'
  ]

  landscapeImgXs: any[] = [
    'url(../../../assets/imgs/slider1-xs.jpg)',
    'url(../../../assets/imgs/slider2-xs.jpg)',
    'url(../../../assets/imgs/slider3-xs.jpg)',
    'url(../../../assets/imgs/slider4-xs.jpg)'
  ]

  
  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  diviceXs!: boolean;

  constructor( public mediaObserver: MediaObserver, private cd : ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        
        if (change[0].mqAlias === 'xs') {
          this.diviceXs = true;
          // console.log('HolaMund', change[0].mqAlias);
        }
        else {
          // console.log("hola")
          this.diviceXs = false;
        }
      });
  }

  ngAfterViewInit(){
    this.cd.detectChanges();
  }

}
