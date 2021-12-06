import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAreaComponent } from './list-area/list-area.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

@NgModule({
  declarations: [AppComponent, ListAreaComponent, ChatAreaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
