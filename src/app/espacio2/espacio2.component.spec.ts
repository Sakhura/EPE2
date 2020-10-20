import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio2Component } from './espacio2.component';

describe('Espacio2Component', () => {
  let component: Espacio2Component;
  let fixture: ComponentFixture<Espacio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
