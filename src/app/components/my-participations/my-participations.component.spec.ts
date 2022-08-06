import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParticipationsComponent } from './my-participations.component';

describe('MyParticipationsComponent', () => {
  let component: MyParticipationsComponent;
  let fixture: ComponentFixture<MyParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParticipationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
