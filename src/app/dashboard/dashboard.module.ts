import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardRouting } from './dashboard.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouting,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
