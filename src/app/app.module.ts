import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAreaComponent } from './list-area/list-area.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { ListAreaSearchComponent } from './list-area/list-area-search/list-area-search.component';
import { ListAreaListsComponent } from './list-area/list-area-lists/list-area-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAreaComponent,
    ChatAreaComponent,
    ListAreaSearchComponent,
    ListAreaListsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
