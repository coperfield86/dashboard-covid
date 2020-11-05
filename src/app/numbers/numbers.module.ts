import {NgModule} from '@angular/core';
import {NumbersRoutingModule} from "./numbers-routing.module";
import {NumbersComponent} from './components/numbers/numbers.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [NumbersComponent],
  imports: [
    NumbersRoutingModule,
    SharedModule
  ],
})
export class NumbersModule { }
