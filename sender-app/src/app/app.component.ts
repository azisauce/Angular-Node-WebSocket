import { Component } from '@angular/core';
import { io } from 'socket.io-client'; // Importing socket.io-client for WebSocket communication

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sender-app';
  private socket = io('http://localhost:8001'); // Creating a socket connection to server running on localhost:8001
  message: string = '';

  sendMessage() {
    this.socket.emit('sendMessage', this.message); // Method to send a message via socket connection
  }
}
