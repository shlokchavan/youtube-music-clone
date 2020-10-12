import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPlayerComponent } from './page/main-player/main-player.component';


const routes: Routes = [
  {
    path: '',
    component: MainPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPlayerRoutingModule { }
