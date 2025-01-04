import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HomeContentComponent } from '../components/home-content/home-content.component';

@Component({
  selector: 'app-home',
  imports: [HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
