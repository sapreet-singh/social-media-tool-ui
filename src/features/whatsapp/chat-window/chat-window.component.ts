import { NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {

  message = '';
  messages: { text: string, type: 'sent' | 'received' }[] = [
    { text: 'Hello', type: 'sent' },
    { text: 'Hi! Thanks for messaging us. This is an automated reply.', type: 'received' },
    { text: 'Hi', type: 'sent' }
  ];

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ text: this.message, type: 'sent' });
      this.message = '';
    }
  }

}
