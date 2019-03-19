import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatAutocompleteModule,
          MatBadgeModule,
          MatBottomSheetModule,
          MatButtonModule,
          MatButtonToggleModule,
          MatCardModule,
          MatCheckboxModule,
          MatChipsModule,
          MatDatepickerModule,
          MatDialogModule,
          MatDividerModule,
          MatExpansionModule,
          MatGridListModule,
          MatIconModule,
          MatInputModule,
          MatListModule,
          MatMenuModule,
          MatNativeDateModule,
          MatPaginatorModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatRadioModule,
          MatRippleModule,
          MatSelectModule,
          MatSidenavModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatSnackBarModule,
          MatSortModule,
          MatStepperModule,
          MatTableModule,
          MatTabsModule,
          MatToolbarModule,
          MatTooltipModule,
          MatTreeModule,} from '@angular/material';
          
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarChatsComponent } from './left-bar/left-bar-chats/left-bar-chats.component';
import { LeftBarContactsComponent } from './left-bar/left-bar-contacts/left-bar-contacts.component';
import { LeftBarSearchComponent } from './left-bar/left-bar-search/left-bar-search.component';
import { UserInfoComponent } from './left-bar/user-info/user-info.component';
import { ChatDisplayComponent } from './right-bar/chat-display/chat-display.component';
import { ChatInfoComponent } from './right-bar/chat-info/chat-info.component';
import { SendMessageComponent } from './right-bar/send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarChatsComponent,
    LeftBarContactsComponent,
    LeftBarSearchComponent,
    UserInfoComponent,
    ChatDisplayComponent,
    ChatInfoComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
