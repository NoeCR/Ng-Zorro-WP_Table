import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, DatePipe } from '@angular/common';
import es from '@angular/common/locales/es';
// NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
// Components adn more
import { TableComponent } from './components/table/table.component';
import { TableTestComponent } from './table-test/table-test.component';
import { TestTransformPipe } from './pipes/test-transform.pipe';
import { ShortIdPipe } from './pipes/short-id.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const PIPES = [ShortIdPipe, SafeHtmlPipe, TestTransformPipe];

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableTestComponent,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzSelectModule,
    NzGridModule,
    NzButtonModule
  ],
  providers: [ { provide: NZ_I18N, useValue: es_ES }, DatePipe, ...PIPES ],
  bootstrap: [AppComponent]
})
export class AppModule { }
