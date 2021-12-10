import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAreaComponent } from './list-area/list-area.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { ListAreaSearchComponent } from './list-area/list-area-search/list-area-search.component';
import { ListAreaListsComponent } from './list-area/list-area-lists/list-area-lists.component';
import { ChatAreaWindowComponent } from './chat-area/chat-area-window/chat-area-window.component';
import { ChatAreaInputComponent } from './chat-area/chat-area-input/chat-area-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAreaComponent,
    ChatAreaComponent,
    ListAreaSearchComponent,
    ListAreaListsComponent,
    ChatAreaWindowComponent,
    ChatAreaInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
