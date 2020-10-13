import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { PlaylistItem } from 'app/interfaces/playlist';
import { AudioService } from 'app/services/songs/audio.service';
import { PlayingService } from 'app/services/songs/playing.service';

@Component({
  selector: 'queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueueItemComponent implements OnInit {
  @Input() item: any;
  currentlyPlaying: PlaylistItem;

  constructor(
    public audioService: AudioService,
    public playingService: PlayingService,
  ) {
    this.playingService.getCurrentlyPlaying().subscribe(
      res => {
        this.currentlyPlaying = res;
      }
    )
  }

  // PLAY AUDIO
  playStream(url) {

    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  itemClicked() {
    this.playingService.setCurrentlyPlaying(this.item);
    this.playStream(this.item.file);
  }


  ngOnInit(): void { }
}
