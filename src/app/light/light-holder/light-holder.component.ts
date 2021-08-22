import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ColorEvent, RGBA } from 'ngx-color';
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

  status$: Subscription = new Subscription();;
  changeColor$: Subscription = new Subscription();
  changeBrightness$: Subscription = new Subscription();

  color: RGBA = { r: 0, g: 0, b: 0, a: 0 };
  brightness: number | null = 255;

  constructor(private lightSvc: LightStatusService) {
    this.status$ = this.getStatus()
      .subscribe(value => {
        // @ts-ignore
        this.color = value
        // this.color.a = 255;
      }
      );

  }

  getStatus() {
    return this.lightSvc.getStatus(this.index);
  }

  changeComplete(event: ColorEvent) {
    this.changeColor$ = this.lightSvc.changeColor(event.color.rgb, this.index)
      .subscribe(
        value => {
          this.color = event.color.rgb;
          // this.color.a = 255;
        }

      );
  }

  onSliderChange(event: MatSliderChange) {
    this.changeBrightness$ = this.lightSvc.changeBright(event.value, this.index).subscribe(
      value => {
        this.brightness = event.value
      }
    );
  }

  ngOnDestroy(): void {
    this.changeColor$.unsubscribe();
    this.changeBrightness$.unsubscribe();
    this.status$.unsubscribe();
  }

}
