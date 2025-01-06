import { AuthService } from './pages/auth/services/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mince-shop';
  baseHref = environment.baseHref;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.router.url.includes('/home')) {
          // Перевіряємо, чи не на роуті "/home"
          window.scrollTo(0, 0); // Прокручуємо сторінку до верхнього лівого кута
        }
      }
    });
  }

  ngOnInit(): void {
    // todo винести в феєрбейз модуль?
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log('curr user: ' + this.authService.currentUserSig());
    });

    // setTimeout(() => {
    //   const preLoader = document.querySelector('.pre-loader');
    //   if (preLoader) {
    //     this.renderer.addClass(preLoader, 'done');
    //   }
    // }, 2500);

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     if (!this.router.url.includes('/home')) { // Перевіряємо, чи не на роуті "/home"
    //       window.scrollTo(0, 0); // Прокручуємо сторінку до верхнього лівого кута
    //     }
    //   }
    // });
  }
}
