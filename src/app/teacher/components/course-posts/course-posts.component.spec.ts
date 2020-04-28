import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePostsComponent } from './course-posts.component';

describe('CoursePostsComponent', () => {
  let component: CoursePostsComponent;
  let fixture: ComponentFixture<CoursePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
