import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [
    {
      id: '1',
      content: 'Solve math quiz 1',
      done: false
    }, {
      id: '2',
      content: 'Deliver science assignment 3',
      done: false
    }, {
      id: '3',
      content: 'Revise chapter 2 in English',
      done: false
    },
  ];
  constructor() { }
}
