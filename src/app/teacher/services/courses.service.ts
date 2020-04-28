import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  currentSection;
  currentVideo;
  selectedIndex;
  courses = [
    {name: 'Chemistry', id: '3', grade: 'Grade 12', icon: 'chemistry'},
    {name: 'Science', id: '2', grade: 'Grade 11', icon: 'science'},
    {name: 'Science', id: '1', grade: 'Grade 10', icon: 'science'},
  ];
  currentCourse;
  constructor() { }

  public setCurrentCourse(course) {
    this.currentCourse = course;
  }

  getCurrentCourse() {
    return this.currentCourse;
  }
}
