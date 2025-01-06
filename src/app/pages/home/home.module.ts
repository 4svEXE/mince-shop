import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HiroComponent } from './components/hiro/hiro.component';
import { MyServicesComponent } from '../../shared/components/my-services/my-services.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactsComponent } from '../../shared/components/contacts/contact-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HiroComponent, ReviewsComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    MyServicesComponent,
    ContactsComponent,
  ],
  exports: [],
  schemas: [],
})
export class HomeModule {}
