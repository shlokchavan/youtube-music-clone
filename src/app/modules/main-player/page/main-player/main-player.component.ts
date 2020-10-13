import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlaylistItem } from 'app/interfaces/playlist';
import { AudioService } from 'app/services/songs/audio.service';
import { PlayingService } from 'app/services/songs/playing.service';
import { SongsService } from 'app/services/songs/songs.service';

@Component({
  selector: 'app-main-player',
  templateUrl: './main-player.component.html',
  styleUrls: ['./main-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPlayerComponent implements OnInit {
  tabs = [
    {
      title: "up next",
      disabled: false
    },
    {
      title: "lyrics",
      disabled: false
    }
  ];
  songQueue: any;
  currentlyPlaying: PlaylistItem;
  playList: PlaylistItem[];

  constructor(
    private songsService: SongsService,
    public playingService: PlayingService,
    public audioService: AudioService
  ) {

    this.playingService.getCurrentlyPlaying().subscribe(res => {
      if (res) {
        this.currentlyPlaying = res;
      } else {
        this.currentlyPlaying = undefined;
      }

    })

    this.playingService.getPlayList().subscribe(res => {
      this.playList = res;
    })
  }

  // GET ALL SONG QUEUE
  getAllSongQueue = () => {
    this.songQueue = this.songsService.getAllSongs();
  }





  ngOnInit(): void {
    this.getAllSongQueue();
  }


}
