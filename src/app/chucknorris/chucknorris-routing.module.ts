import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChucknorrisComponent} from "./chucknorris/chucknorris.component";

const routes: Routes = [
  {
    path: '',
    component: ChucknorrisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChucknorrisRoutingModule { }
