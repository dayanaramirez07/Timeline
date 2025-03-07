import { Component } from '@angular/core';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timeline';
}
