import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselUltimoAgregadoComponent } from './carrousel-ultimo-agregado.component';

describe('CarrouselUltimoAgregadoComponent', () => {
  let component: CarrouselUltimoAgregadoComponent;
  let fixture: ComponentFixture<CarrouselUltimoAgregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselUltimoAgregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselUltimoAgregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
