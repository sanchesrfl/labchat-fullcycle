import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatAreaComponent,
    MessageInputComponent,
    SidebarComponent,
    LandingPageComponent,
    ChatPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
