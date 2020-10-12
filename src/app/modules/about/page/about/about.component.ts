import { Component } from '@angular/core';
import { SongsService } from 'app/services/songs/songs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  tabs = [
    {
      title: 'up next'
    },
    {
      title: 'lyrics'
    }
  ];
  songQueue: any;

  constructor(private songsService: SongsService) {}

  // GET ALL SONG QUEUE
  getAllSongQueue = () => {
    this.songQueue = this.songsService.getAllSongs();
  };
  ngOnInit(): void {
    this.getAllSongQueue();
  }
}
