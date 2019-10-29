import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertModule,ProgressbarModule ,ModalModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    NodesDetailComponent
  ],
  imports: [
    BrowserModule,
     AlertModule.forRoot(),
     ProgressbarModule.forRoot(),
     ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NodesDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
