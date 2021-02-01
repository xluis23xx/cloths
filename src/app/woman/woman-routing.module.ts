import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomanPage } from './woman.page';

const routes: Routes = [
  {
    path: '',
    component: WomanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomanPageRoutingModule {}
