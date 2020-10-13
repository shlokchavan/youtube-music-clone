import { Injectable } from '@angular/core';
import { PlaylistItem } from 'app/interfaces/playlist';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PlayingService {
    playList: BehaviorSubject<PlaylistItem[]> = new BehaviorSubject([]);
    currentlyPlaying: BehaviorSubject<PlaylistItem> = new BehaviorSubject(null);
    getPlayList(): Observable<PlaylistItem[]> {
        return this.playList.asObservable();
    }

    setPlaylist(list) {
        this.playList.next(list);
    }

    // Currently Playing
    getCurrentlyPlaying(): Observable<PlaylistItem> {
        return this.currentlyPlaying.asObservable();
    }

    setCurrentlyPlaying(item) {
        this.currentlyPlaying.next(item);
    }


}