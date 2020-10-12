import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  baseUrl = 'assets/api/';
  constructor(private httpClient: HttpClient) { }

  public getAllSongs(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}relax-music.json`);
  }
}
