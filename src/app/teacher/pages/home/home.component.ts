import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { TodoService } from '../../services/todo/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoItemComponent } from '../../dialogs/todo-item/todo-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  largeScreen = window.innerWidth >= 600;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private coursesService: CoursesService, public router: Router,
              private todoService: TodoService, private dialog: MatDialog) {
    this.items = todoService.todoList;
  }

  ngOnInit() {
  }

  openAssignment() {
    this.coursesService.setCurrentCourse({ name: 'Chemistry', id: '3', grade: 'Grade 12', icon: 'chemistry' });
    this.coursesService.selectedIndex = 2;
    this.router.navigate(['teacher', 'course-details']);
  }

  toggleDone(item) {
    item.done = !item.done;
  }

  delete(item) {
    this.todoService.todoList = this.todoService.todoList.filter(i => i.id !== item.id);
    this.items = this.todoService.todoList;
  }

  add() {
    this.dialog.open(TodoItemComponent, {
      width: '380px',
      data: {}
    }).afterClosed().subscribe(result => {
      if (result && result.trim()) {
        this.todoService.todoList.unshift({
          id: Math.random().toString(),
          content: result,
          done: false
        });
        this.items = this.todoService.todoList;
      }
    });
  }

}
