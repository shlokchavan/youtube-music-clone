import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MainPlayerRoutingModule } from './main-player-routing.module';
import { MainPlayerComponent } from './page/main-player/main-player.component';
import { QueueItemComponent } from './components/queue-item/queue-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MainPlayerComponent, QueueItemComponent],
  imports: [
    MainPlayerRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class MainPlayerModule { }
