import { Component, signal } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home-content',
  imports: [CounterComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {
  message = signal('This message is from HomeContentComponent');
}
