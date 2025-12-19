import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',        // ⭐ enables fragment scroll
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 80]               // ⭐ offset for fixed navbar
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
