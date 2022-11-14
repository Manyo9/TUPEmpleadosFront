import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSueldosNetosComponent } from './reporte-sueldos-netos.component';

describe('ReporteSueldosNetosComponent', () => {
  let component: ReporteSueldosNetosComponent;
  let fixture: ComponentFixture<ReporteSueldosNetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteSueldosNetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteSueldosNetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
