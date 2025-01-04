import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  message = input('This message is from CounterComponent Default');
  counter = signal(0);
  
  increment() {
    this.counter.update(n => n + 1);
  }
}
