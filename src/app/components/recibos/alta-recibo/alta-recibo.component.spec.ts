import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaReciboComponent } from './alta-recibo.component';

describe('AltaReciboComponent', () => {
  let component: AltaReciboComponent;
  let fixture: ComponentFixture<AltaReciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaReciboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
