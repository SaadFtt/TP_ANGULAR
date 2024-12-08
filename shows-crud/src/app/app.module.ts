import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { AddShowComponent } from './components/add-show/add-show.component';
import { EditShowComponent } from './components/edit-show/edit-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    AddShowComponent,
    EditShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
