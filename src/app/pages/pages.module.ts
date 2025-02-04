import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home.module';

import { MyServicesComponent } from "../shared/components/my-services/my-services.component";
import { ContactsComponent } from '../shared/components/contacts/contact-form.component';
import { MeComponent } from './me/me.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    MeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    MatExpansionModule,
    ContactsComponent,
    MyServicesComponent,
    AuthModule
],
})
export class PagesModule {}
