import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-resources',
  templateUrl: './course-resources.component.html',
  styleUrls: ['./course-resources.component.scss']
})
export class CourseResourcesComponent implements OnInit {

  files = [
    'Chapter 1: Atoms and Molecules',
    'Chapter 2: Inorganic Chemistry',
    'Chapter 3: Organic Chemistry',
    'Chapter 4: Forensic Chemistry'
  ];
  constructor() { }

  ngOnInit() {
  }

}
