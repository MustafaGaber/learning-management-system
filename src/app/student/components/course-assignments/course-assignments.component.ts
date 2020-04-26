import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-assignments',
  templateUrl: './course-assignments.component.html',
  styleUrls: ['./course-assignments.component.scss']
})
export class CourseAssignmentsComponent implements OnInit {

  assignments = [
    {
      delivering: false,
      id: '1',
      title: 'Chapter 1: Atomic Structre Lesson',
      date: '21/4/2020',
      content: 'Describe each of the following: Energy levels, electrons, protons, inonization energy.'
    },
    {
      delivering: false,
      id: '1',
      title: 'Chapter 1: Atomic Spectra Lesson',
      date: '22/4/2020',
      content: `What is the change in energy when an electron relaxes from the n=3 state to the n=2 state?
       Is energy absorbed or emitted ?
       what is the wave length of light associated with this transition?`
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  deliverAssignment(assignment) {
    assignment.delivering = true;
  }

  saveAssignment(assignment) {
    assignment.delivering = false;
  }
}
