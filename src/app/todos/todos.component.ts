import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../types/todos.type';
import { catchError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService)
  todosItems = signal<Array<Todo>>([])

  delete(id: number) {
    this.todosItems.update(items => items.filter(item => item.id !== id))
  }

  ngOnInit(): void {
    console.log('TodosComponent ngOnInit')
    this.todosService.getTodos().subscribe(todos => this.todosItems.set(todos))
  }
}
