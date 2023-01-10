import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KompanijaComponent } from './kompanija.component';

describe('KompanijaComponent', () => {
  let component: KompanijaComponent;
  let fixture: ComponentFixture<KompanijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KompanijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KompanijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
