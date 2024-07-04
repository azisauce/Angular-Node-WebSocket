# Angular Socket.IO Communication Example

This project demonstrates communication between two Angular applications using Socket.IO. One application acts as a sender, and the other acts as a receiver.

## Setup Instructions

### Sender Application
<br><br>
First, I created an Angular application which is the sender application and installed the needed packages:
<br><br>
` ng new sender-app
cd sender-app
npm install socket.io-client `
Second, I create the server for this application and installed the needed packages:
<br><br>
`mkdir sender-server
cd sender-server
npm init -y
npm install express socket.io cors`
<br><br>
### Receiver Application
<br><br>
I did the same for the receiver application:
<br><br> 
`ng new receiver-app
cd receiver-app
npm install socket.io-client
mkdir receiver-server
cd receiver-server
npm init -y
npm install express socket.io cors`
<br><br>
Finally, I run both applications: <br>
<br>
`cd sender-server
node index.js
cd ../sender-app
ng serve --port 4200
cd receiver-server
node index.js
cd ../receiver-app
ng serve --port 4201`
<br>
### Details
<br><br>
After created the sender application, I set up src/app/app.component.ts to send messages: <br>
- I imported { io } from 'socket.io-client' <br>
- I created a private instance of the Socket.IO client and connects it to the server running on http://localhost:8001. <br>
- I defined a method sendMessage() which is called when a user triggers an action to send a message. <br>
- I create the HTML template for the component src/app/app.component.html <br>
<br>
I set up the NodeJs Server for the sender application:<br>
- I imported the needed framework, protocoles such express, http, socket.io and cors <br>
- I set up the server by creating it <br>
- I used Socker.IO to handle events such as connection, sending messages and disconnection. <br>

I did the same for the other application with a little bit of changes such as function to receive the messages.
