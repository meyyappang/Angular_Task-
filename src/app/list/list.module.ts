import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';

console.warn("list loading")
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
