import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'shared', pathMatch: 'full' },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

