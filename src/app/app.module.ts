import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HikeComponent } from './Mycomponents/hike/hike.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { LogInComponent } from './Mycomponents/log-in/log-in.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { HttpClientModule } from '@angular/common/http';
import {SplitButtonModule} from 'primeng/splitbutton';
import { TableFormComponent } from './Mycomponents/table-form/table-form.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HikeComponent,
    HeaderComponent,
    LogInComponent,
    TableFormComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,SplitButtonModule,ButtonModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
