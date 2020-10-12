import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MainPlayerRoutingModule } from './main-player-routing.module';
import { MainPlayerComponent } from './page/main-player/main-player.component';
import { HttpClientModule } from '@angular/common/http';
import { QueueItemModule } from 'app/components/queue-item/queue-item.module';

@NgModule({
  declarations: [MainPlayerComponent],
  imports: [
    MainPlayerRoutingModule,
    SharedModule,
    QueueItemModule,
    HttpClientModule
  ]
})
export class MainPlayerModule {}
