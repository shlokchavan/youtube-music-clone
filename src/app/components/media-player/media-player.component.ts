import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit {
  isPlaying: boolean;
  musicControls = [
    {
      class: "previous-btn",
      icon: "skip_previous",
      action: "back"
    },
    {
      class: "play-pause-btn",
      icon: "pause",
      action: "playPause"
    },
    {
      class: "next-btn",
      icon: "skip_next",
      action: "next"
    },
  ];

  playPause() {
    this.isPlaying = !this.isPlaying;

    console.log(this.isPlaying);
  }

  musicAction(action) {
    switch (action) {
      case 'playPause':
        this.playPause();
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
  next() {

  }
  back() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
