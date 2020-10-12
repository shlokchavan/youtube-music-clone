import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueItemComponent } from './queue-item.component';

@NgModule({
  declarations: [QueueItemComponent],
  imports: [CommonModule],
  exports: [QueueItemComponent]
})
export class QueueItemModule {}
