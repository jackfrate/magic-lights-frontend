import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LightStatusService } from '../light-status.service';

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.scss']
})
export class LightListComponent implements OnInit {
  ipList$: Observable<string[]>
  constructor(private lightSvc: LightStatusService) {
    this.ipList$ = this.lightSvc.getIPList();
  }

  ngOnInit(): void {
  }

}
