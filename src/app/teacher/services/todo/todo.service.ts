import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [
    {
      id: '1',
      content: 'Start Grade 12 Live class at 5pm',
      done: false
    }, {
      id: '2',
      content: 'Start Grade 10 Live class at 7pm',
      done: false
    }, {
      id: '3',
      content: 'Check Grade 11 homeworks',
      done: false
    },
  ];
  constructor() { }
}
