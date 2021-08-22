import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LightHolderComponent } from './light/light-holder/light-holder.component';
import { LightListComponent } from './light/light-list/light-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material 
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorChromeModule } from 'ngx-color/chrome'; // <color-chrome></color-chrome>



@NgModule({
  declarations: [
    AppComponent,
    LightHolderComponent,
    LightListComponent
  ],
  imports: [
    BrowserModule,
    NgxMatColorPickerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    ColorSketchModule,
    ColorChromeModule,
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
