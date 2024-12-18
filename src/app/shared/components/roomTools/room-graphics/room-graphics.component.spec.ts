import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGraphicsComponent } from './room-graphics.component';

describe('RoomGraphicsComponent', () => {
  let component: RoomGraphicsComponent;
  let fixture: ComponentFixture<RoomGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomGraphicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
