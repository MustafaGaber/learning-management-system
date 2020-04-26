import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskTeacherComponent } from './ask-teacher.component';

describe('AskTeacherComponent', () => {
  let component: AskTeacherComponent;
  let fixture: ComponentFixture<AskTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
