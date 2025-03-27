import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: false,
  // imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})


export class ProgressBarComponent {
  @Input() progress: number = 0;
}