import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';  // Importa io correttamente

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket: any;
  message: string = '';
  messages: string[] = [];
  chatOpen: boolean = false;
  isTyping: boolean = false;  // Variabili per gestire lo stato di "scrittura" del server

  ngOnInit() {
    // Connessione al server Flask con Socket.IO (usa HTTPS)
    this.socket = io('https://animated-invention-699g6g469qpjfjjx-5000.app.github.dev');  // Cambia l'URL se necessario

    // Ascolta i messaggi ricevuti dal server (chatbot)
    this.socket.on('message', (msg: string) => {
      this.messages.push(`Piombobot: ${msg}`);
      this.isTyping = false;  // Nascondi l'indicatore di scrittura
    });
  }

  sendMessage(message: HTMLTextAreaElement) {
    this.message = message.value;
    if (this.message.trim()) {
      // Aggiungi il messaggio dell'utente alla chat
      this.messages.push(`Tu: ${this.message}`);
      message.value = '';  // Pulisce la casella di testo

      // Indica che il server sta scrivendo
      this.isTyping = true;

      // Invia il messaggio al server tramite Socket.IO
      this.socket.emit('message', this.message);
    }
  }

  // Metodo per aprire il popup della chat
  openChat(): void {
    this.chatOpen = true;
  }

  // Metodo per chiudere il popup della chat
  closeChat(): void {
    this.chatOpen = false;
  }

  // Metodo per gestire la pressione di un tasto (Enter)
  onKeydown(event: KeyboardEvent, message: HTMLTextAreaElement): void {
    if (event.key === 'Enter') {
      this.sendMessage(message);
    }
  }

  // Metodo per gestire l'altezza dinamica del campo di input
  adjustHeight(input: HTMLTextAreaElement) {
    input.style.height = 'auto';  // Reset height to auto first
    input.style.height = `${input.scrollHeight}px`;  // Set height based on content scrollHeight
  }
}
