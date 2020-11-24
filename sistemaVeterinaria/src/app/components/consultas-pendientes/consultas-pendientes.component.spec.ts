import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasPendientesComponent } from './consultas-pendientes.component';

describe('ConsultasPendientesComponent', () => {
  let component: ConsultasPendientesComponent;
  let fixture: ComponentFixture<ConsultasPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
