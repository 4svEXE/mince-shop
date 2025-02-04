import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '../../../core/variables/Routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isHomeNav = true;
  @Input() navClass = '';
  navMainClass = ' flex items-center gap-8 ';
  routes = Routes;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToFragment(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

  getNavClassList() {
    return this.navClass ? this.navMainClass + this.navClass : this.navMainClass;
  }
}
