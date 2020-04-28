import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVideoSectionComponent } from './course-video-section.component';

describe('CourseVideoSectionComponent', () => {
  let component: CourseVideoSectionComponent;
  let fixture: ComponentFixture<CourseVideoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseVideoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
