import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { DodComponent } from './dod/dod.component';
import { MaskComponent } from './mask/mask.component';


@NgModule({
  declarations: [
    DodComponent,
    MaskComponent
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})
export class MyModuleModule { }
