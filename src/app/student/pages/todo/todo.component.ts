import { Component, OnInit, HostListener } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoItemComponent } from '../../dialogs/todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items: any[] = [];

  largeScreen = window.innerWidth >= 600;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth >= 600;
  }
  constructor(private todoService: TodoService, public dialog: MatDialog) {
    this.items = todoService.todoList;
  }

  ngOnInit() {
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
