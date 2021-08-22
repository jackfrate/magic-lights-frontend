import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightHolderComponent } from './light/light-holder/light-holder.component';
import { LightListComponent } from './light/light-list/light-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LightHolderComponent,
    LightListComponent
  ],
  imports: [
    BrowserModule,
    NgxMatColorPickerModule
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
