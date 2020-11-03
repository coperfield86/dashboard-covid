import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NumbersComponent} from "./components/numbers/numbers.component";

const routes: Routes = [
  {
    path: '',
    component: NumbersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumbersRoutingModule { }
