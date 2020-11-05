import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppMaterialModule} from "../app-material/app-material.module";
import {HeaderComponent} from "./header/header.component";
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
  ],
    imports: [
      CommonModule,
      RouterModule,
      AppMaterialModule
    ],
    exports: [
      CommonModule,
      RouterModule,
      AppMaterialModule,
      HeaderComponent,
      SidenavListComponent,
      LayoutComponent
    ]
})
export class SharedModule { }
