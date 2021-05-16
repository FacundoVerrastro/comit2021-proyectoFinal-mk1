import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRecomendadosComponent } from './carrousel-recomendados.component';

describe('CarrouselRecomendadosComponent', () => {
  let component: CarrouselRecomendadosComponent;
  let fixture: ComponentFixture<CarrouselRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselRecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
