import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio6Component } from './espacio6.component';

describe('Espacio6Component', () => {
  let component: Espacio6Component;
  let fixture: ComponentFixture<Espacio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
