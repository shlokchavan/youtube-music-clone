import { Component, OnInit } from '@angular/core';
import { PlaylistItem } from 'app/interfaces/playlist';
import { StreamState } from 'app/interfaces/stream-state';
import { AudioService } from 'app/services/songs/audio.service';
import { PlayingService } from 'app/services/songs/playing.service';

@Component({
  selector: 'media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  state: StreamState;
  currentFile: PlaylistItem;
  isPlaying: boolean;
  musicControls = [
    {
      class: 'previous-btn',
      icon: 'skip_previous',
      action: 'back'
    },
    {
      class: 'play-pause-btn',
      icon: 'pause',
      action: 'playPause'
    },
    {
      class: 'next-btn',
      icon: 'skip_next',
      action: 'next'
    }
  ];

  

  musicAction(e, action) {
    switch (action) {
      case 'playPause':
        this.state.playing ? this.pause() : this.play();
        break;
      case 'back':
        this.back();
        break;
      case 'next':
        this.next();
        break;

      default:
        break;
    }
  }
  // NEXT
  next() {
    // const index = this.currentFile.index + 1;
    // const file = this.files[index];
    // this.openFile(file, index);
  }
  back() {
    // const index = this.currentFile.index - 1;
    // const file = this.files[index];
    // this.openFile(file, index);
  }


  // PLAY AUDIO
  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  // OPEN MEDIA
  openFile(file, index) {
    // this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  // PAUSE MEDIA
  pause() {
    this.audioService.pause();
  }

  // PLAY MEDIA
  play() {
    this.audioService.play();
  }

  // STOP
  stop() {
    this.audioService.stop();
  }

  // TOGGLE MUTE
  toggleMute() {
    this.state.muted = !this.state.muted;
    this.state.muted
      ?
      this.state.volume = 0
      :
      this.state.volume = 50;

    this.audioService.toggleMute();
  }

  // Check FIRST & LAST Playing
  isFirstPlaying() {
    // return this.currentFile.index === 0;
  }

  isLastPlaying() {
    // return this.currentFile.index === this.files.length - 1;
  }

  // SLIDER CHANGE
  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  // VOLUME CHANGED
  onVolumeChanged(to) {
    this.audioService.volumeAdjust(to.value);
  }


  constructor(public audioService: AudioService,
    public playingService: PlayingService
  ) {


    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    // Current Playing
    this.playingService.getCurrentlyPlaying().subscribe(
      res => {
        if (res) {
          this.currentFile = res;
          this.state.playing = true;
        } else {
          this.currentFile = undefined;
        }
      }
    )
  }

  ngOnInit(): void { }
}
