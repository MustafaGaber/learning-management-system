import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  selectedIndex;
  private currentCourse;
  currentSection;
  currentVideo;
  messageShowed;
  private currentCourseSubject = new Subject();
  constructor() { }

  public getCurrentCourseObservable() {
    return this.currentCourseSubject.asObservable();
  }

  public setCurrentCourse(course) {
    this.currentCourse = course;
    this.currentCourseSubject.next(course);
  }

  getCurrentCourse() {
    return this.currentCourse;
  }
}
