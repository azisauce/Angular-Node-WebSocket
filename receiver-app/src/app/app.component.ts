import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private socket = io('http://localhost:8001');
  messages: string[] = [];

  ngOnInit() {
    this.socket.on('connect', () => {
      console.log('Connected to the sender server');
    });

    this.socket.on('message', (msg: string) => {
      console.log('Message received:', msg);
      this.messages.push(msg); // Pushing received message to the array
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from the sender server');
    });
  }
}
