import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio1Component } from './espacio1.component';

describe('Espacio1Component', () => {
  let component: Espacio1Component;
  let fixture: ComponentFixture<Espacio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
