import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InstagramChatWindowComponent } from '../features/instagram/chat-window/chat-window.component';
import { ChatWindowComponent } from '../features/whatsapp/chat-window/chat-window.component';

export const routes: Routes = [
  {path: 'instagram', component: InstagramChatWindowComponent },
  {path: 'whatsapp', component:  ChatWindowComponent },
  {path:'', component: SidebarComponent, pathMatch:'full' }

];
