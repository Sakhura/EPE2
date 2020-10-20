import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio4Component } from './espacio4.component';

describe('Espacio4Component', () => {
  let component: Espacio4Component;
  let fixture: ComponentFixture<Espacio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
