import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { LightStatus } from 'src/app/models/rgb';
import { LightStatusService } from '../light-status.service';

@Component({
  selector: 'app-light-holder',
  templateUrl: './light-holder.component.html',
  styleUrls: ['./light-holder.component.scss']
})
export class LightHolderComponent {

  @Input() index: number | null = null;
  @Input() ip: string = 'NONE';
  status$: Observable<LightStatus>;

  constructor(private lightSvc: LightStatusService) {
    this.status$ = this.getStatus();
  }

  getStatus() {
    // @ts-ignore
    return this.lightSvc.getStatus(this.index);
  }

  showCard(): boolean {
    return this.index !== null;
  }

}
