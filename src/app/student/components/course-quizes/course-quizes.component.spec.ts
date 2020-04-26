import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizesComponent } from './course-quizes.component';

describe('CourseQuizesComponent', () => {
  let component: CourseQuizesComponent;
  let fixture: ComponentFixture<CourseQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
