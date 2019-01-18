import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatChipsModule } from '@angular/material/chips';
import { TempMainComponent } from './temp-main/temp-main.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyNavComponent,
    DashboardComponent,
    FirstComponent,
    AboutUsComponent,
    TempMainComponent
  ],
  imports: [
    HttpClientModule,
    MatSelectModule,
    HttpModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatIconModule, LayoutModule,
    MatToolbarModule, MatChipsModule, MatButtonModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
