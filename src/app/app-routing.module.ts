import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./covid/covid.module').then(m => m.CovidModule)
  },
  {
    path: 'chucknorris',
    loadChildren: () => import('./chucknorris/chucknorris.module').then(m => m.ChucknorrisModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./numbers/numbers.module').then(m => m.NumbersModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
