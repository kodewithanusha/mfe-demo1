import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DodComponent } from './dod/dod.component';
import { MaskComponent } from './mask/mask.component';

const routes: Routes = [
  { path: 'dod', component: DodComponent },
  { path: 'mask', component: MaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModuleRoutingModule {}
