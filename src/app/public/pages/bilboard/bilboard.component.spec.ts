import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilboardComponent } from './bilboard.component';

describe('BilboardComponent', () => {
  let component: BilboardComponent;
  let fixture: ComponentFixture<BilboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
