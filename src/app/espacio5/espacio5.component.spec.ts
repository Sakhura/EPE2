import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espacio5Component } from './espacio5.component';

describe('Espacio5Component', () => {
  let component: Espacio5Component;
  let fixture: ComponentFixture<Espacio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Espacio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Espacio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
