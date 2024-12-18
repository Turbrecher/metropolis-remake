import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatGraphicComponent } from './seat-graphic.component';

describe('SeatGraphicComponent', () => {
  let component: SeatGraphicComponent;
  let fixture: ComponentFixture<SeatGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
