import { Component } from '@angular/core';

@Component({
  selector: 'app-hiro',
  templateUrl: './hiro.component.html',
  styleUrl: './hiro.component.scss'
})
export class HiroComponent {
  messages = [
    {
      text: 'create your own painting in the style of Minecraft!',
      route: '',
    },
    {
      text: 'or BUY Unique Minecraft paintings for your home!',
      route: '',
    },
  ];
}
