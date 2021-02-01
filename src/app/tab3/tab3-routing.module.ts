import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { ManPage } from '../man/man.page';
import { WomanPage } from '../woman/woman.page';
import { ChildrenPage } from '../children/children.page';
import { BabyPage } from '../baby/baby.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'man',
    component: ManPage
  },
  {
    path: 'woman',
    component: WomanPage
  },
  {
    path: 'children',
    component: ChildrenPage
  }, 
  {
    path: 'baby',
    component: BabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
