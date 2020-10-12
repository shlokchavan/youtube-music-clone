import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './media-player.component';
import { MaterialModule } from '@shared/material.module';



@NgModule({
  declarations: [MediaPlayerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MediaPlayerComponent
  ]
})
export class MediaPlayerModule { }
