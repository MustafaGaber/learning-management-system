import { TestBed } from '@angular/core/testing';

import { CourseContentsService } from './course-contents.service';

describe('CourseContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseContentsService = TestBed.get(CourseContentsService);
    expect(service).toBeTruthy();
  });
});
