import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RGBA } from 'ngx-color';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { BASE_IP, MessageRes } from 'src/stuff';
import { Brightness, LightStatus, RGB } from '../models/rgb';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {

  ipList$: Observable<string[]>;

  constructor(private http: HttpClient) {
    this.ipList$ = this.getIPList();
  }

  getIPList(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_IP}/ip_list`);
  }

  changeColor(rgb: RGBA, index: number): Observable<MessageRes> {
    return this.http.post<MessageRes>(`${BASE_IP}/light_color`, {
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
      a: 255,
      index: index
    });
  }

  changeBright(brightness: number | null, index: number): Observable<MessageRes> {
    if (brightness === null) {
      brightness = 255;
    }
    return this.http.post<MessageRes>(`${BASE_IP}/light_bright`, {
      bright: brightness,
      index: index
    });
  }

  getStatus(index: number): Observable<LightStatus> {
    return this.http.get<LightStatus>(`${BASE_IP}/light_status/${index}`);
  }

}
