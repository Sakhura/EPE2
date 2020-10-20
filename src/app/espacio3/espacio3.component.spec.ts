import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio3Component } from './espacio3.component';

describe('Espacio3Component', () => {
  let component: Espacio3Component;
  let fixture: ComponentFixture<Espacio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
