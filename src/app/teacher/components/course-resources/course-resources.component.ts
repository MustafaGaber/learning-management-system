import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceComponent } from '../../dialogs/resource/resource.component';

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
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addResource() {
    this.dialog.open(ResourceComponent, { data: {} }).afterClosed().subscribe(result => {
      if (result) {
        this.files.push(result.name);
      }
    });
  }

  deleteResource(file) {
    this.files = this.files.filter(f => f !== file);
  }
}
