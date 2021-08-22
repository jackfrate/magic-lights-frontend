import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Observable, Subscription } from 'rxjs';
import { LightStatus, RGB } from 'src/app/models/rgb';
import { MessageRes } from 'src/stuff';
import { LightStatusService } from '../light-status.service';


@Component({
  selector: 'app-light-holder',
  templateUrl: './light-holder.component.html',
  styleUrls: ['./light-holder.component.scss']
})
export class LightHolderComponent {

  @Input() index: number = -1;
  @Input() ip: string = 'NONE';
  status$: Observable<LightStatus>;
  changeColor$: Subscription = new Subscription();

  color: RGB = {r: 0, g: 0, b: 0};
  brightness: number = 255;

  constructor(private lightSvc: LightStatusService) {
    this.status$ = this.getStatus(); 
    this.status$.subscribe( value => 
      this.color = value
    );

  }

  getStatus() {
    return this.lightSvc.getStatus(this.index);
  }

  changeComplete($event: ColorEvent) {
    this.changeColor$ = this.lightSvc.changeColor($event.color.rgb, this.index).subscribe(
      value => this.color = $event.color.rgb
    );
    
  }

  ngOnDestroy(): void {
    this.changeColor$.unsubscribe();
  }

}
