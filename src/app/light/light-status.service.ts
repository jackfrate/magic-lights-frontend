import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_IP, ListRes } from 'src/stuff';
import { Brightness, RGB } from '../models/rgb';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {

  constructor(private http: HttpClient) { }

  getIPList(): Observable<ListRes<string>> {
    return this.http.get(`${BASE_IP}/ip_list`);
  }

  changeColor(rgb: RGB, index: number) {

  }

  changeBrigh(brightness: Brightness, index: number) {

  }


}
