import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDeVentaComponent } from './puntos-de-venta.component';

describe('PuntosDeVentaComponent', () => {
  let component: PuntosDeVentaComponent;
  let fixture: ComponentFixture<PuntosDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDeVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
