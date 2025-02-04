import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
  @Input() messages = [
    {
      text: 'test splash!',
      route: '',
    },
  ];
}
