import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRoomComponent } from './date-room.component';

describe('DateRoomComponent', () => {
  let component: DateRoomComponent;
  let fixture: ComponentFixture<DateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
