import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDisplayComponent } from './right-bar/chat-display/chat-display.component';
import { LeftBarContactsComponent } from './left-bar/left-bar-contacts/left-bar-contacts.component';
import { LeftBarChatsComponent } from './left-bar/left-bar-chats/left-bar-chats.component';
import { LeftBarSearchComponent } from './left-bar/left-bar-search/left-bar-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'room/1', pathMatch: 'full' },
  { path: 'Contacts', component: LeftBarContactsComponent },
  { path: 'Chats', component: LeftBarChatsComponent },
  { path: 'room/:roomId', component: ChatDisplayComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
