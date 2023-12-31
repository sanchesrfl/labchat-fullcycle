import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { connectionGuard } from './shared/guards/connection.guard';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'chat',
    component: ChatPageComponent,
    canActivate: [connectionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
