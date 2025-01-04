import { inject, Injectable } from '@angular/core';
import { Todo } from '../types/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)
  getTodos() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
  }
  constructor() { }

}
