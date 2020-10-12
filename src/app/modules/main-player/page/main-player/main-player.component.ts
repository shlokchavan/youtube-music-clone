import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
      title: "up next"
    },
    {
      title: "lyrics"
    }
  ];
  songQueue: any;

  constructor(private songsService: SongsService) { }

  // GET ALL SONG QUEUE
  getAllSongQueue = () => {
    this.songQueue = this.songsService.getAllSongs();
  }
  ngOnInit(): void {
    this.getAllSongQueue();
  }


}
