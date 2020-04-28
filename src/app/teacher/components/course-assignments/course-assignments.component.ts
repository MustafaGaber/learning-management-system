import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HomeworkComponent } from '../../dialogs/homework/homework.component';

@Component({
  selector: 'app-course-assignments',
  templateUrl: './course-assignments.component.html',
  styleUrls: ['./course-assignments.component.scss']
})
export class CourseAssignmentsComponent implements OnInit {
  deliveredOpened = false;
  currentAssignment;
  assignments: any[] = [
    {
      id: '1',
      deliveredNum: 2,
      newDeliveredNum: 1,
      title: 'Chapter 1: Atomic Structre Lesson',
      date: '21/4/2020',
      content: 'Describe each of the following: Energy levels, electrons, protons, inonization energy.',
      delivered: [
        {
          id: '1',
          name: 'Ahmed Hassan',
          img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg',
          content: {
            imgs: ['https://i.ytimg.com/vi/bMndHV8m-w8/maxresdefault.jpg'],
            text: `Energy Levels are fixed distances from the nucleus of an atom where electrons may be found.
            Electrons are tiny, negatively charged particles in an atom that move around the positive nucleus at the center.`
          }
        }, {
          accepted: true,
          id: '2',
          content: {
            imgs: ['https://i.pinimg.com/originals/ee/a3/a9/eea3a9ed6e53436eddb2605165d6a723.jpg']
          },
          name: 'Mohamed Ali',
          img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }
      ]
    },
    {
      id: '1',
      deliveredNum: 1,
      newDeliveredNum: 1,
      title: 'Chapter 1: Atomic Spectra Lesson',
      date: '22/4/2020',
      content: `What is the change in energy when an electron relaxes from the n=3 state to the n=2 state?
       Is energy absorbed or emitted ?
       what is the wave length of light associated with this transition?`,
      delivered: [{
        id: '2',
        content: {
          imgs: ['https://s3mn.mnimgs.com/img/shared/content_ck_images/ck_5cf0f2929fb7e.jpg']
        },
        name: 'Mohamed Ali',
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }
      ]
    }
  ];
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDelivered(assignment) {
    this.currentAssignment = assignment;
    this.deliveredOpened = true;
  }

  saveAssignment(assignment) {
    assignment.opened = false;
  }

  back() {
    this.deliveredOpened = false;
  }

  markAccepted(assignment) {
    assignment.accepted = true;
    assignment.refused = false;
  }

  markRefused(assignment) {
    assignment.refused = true;
    assignment.accepted = false;
  }

  addAssignment() {
    this.dialog.open(HomeworkComponent, { data: {} }).afterClosed().subscribe(result => {
      if (result) {
        const date = new Date();
        const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
        const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        this.assignments.push({
          id: Math.random().toString(),
          date: `${d}/${m}/${y}`,
          deliveredNum: 0,
          newDeliveredNum: 0,
          title: result.title,
          content: result.content
        });
      }
    });
  }
}
