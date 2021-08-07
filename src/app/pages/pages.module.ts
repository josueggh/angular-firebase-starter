import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ],
  exports : [
    HomeComponent,
    NotFoundComponent,
  ]
})
export class PagesModule { }
