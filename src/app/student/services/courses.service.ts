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
  courses = [
    {name: 'Science', id: '1', icon: 'science'},
    {name: 'Math', id: '2', icon: 'math'},
    {name: 'English', id: '3', icon: 'english'},
    {name: 'Arabic', id: '4', icon: 'arabic'},
    {name: 'Arts', id: '5', icon: 'arts'},
    {name: 'History', id: '6', icon: 'history'},
    {name: 'Geography', id: '7', icon: 'geography'},
    {name: 'Philosophy', id: '8', icon: 'philosophy'},
  ];
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
