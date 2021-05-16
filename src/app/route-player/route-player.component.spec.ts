import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePlayerComponent } from './route-player.component';

describe('RoutePlayerComponent', () => {
  let component: RoutePlayerComponent;
  let fixture: ComponentFixture<RoutePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
