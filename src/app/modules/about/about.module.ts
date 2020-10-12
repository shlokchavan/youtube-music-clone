import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { QueueItemModule } from 'app/components/queue-item/queue-item.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, HttpClientModule, QueueItemModule, SharedModule]
})
export class AboutModule {}
