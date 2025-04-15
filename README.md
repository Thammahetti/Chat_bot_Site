
# 🧠 Chatbot Piombot

Un chatbot interattivo basato su Flask e Angular, progettato per rispondere a domande sugli **Anni di Piombo** in Italia. Il bot, impersonando il "Prof. Storia", fornisce risposte concise e pertinenti, utilizzando il modello LLaMA 3 tramite Ollama.




<img src="https://media2.giphy.com/media/1iX4DlcbWXDFKfmrp7/giphy-downsized.gif" width="200">




## 📁 Struttura del Progetto

```
Chat_bot_Site/
├── backend/
│   ├── app.py
│   ├── ollama.sh
│   └── requirements.txt
├── frontend/
│   ├── req.sh
│   ├── package.json
│   ├── angular.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.module.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   └── chat/
│   │   │       ├── chat.component.ts
│   │   │       ├── chat.component.html
│   │   │       └── chat.component.css
│   │   ├── assets/
│   │   │   ├── Aldo_moro.png
│   │   │   └── storiprof.png
│   │   ├── index.html
│   │   └── styles.css
├── README.md
└── req.txt
```



![Banner 2](https://email.uplers.com/blog/wp-content/uploads/2024/11/image7-1.gif)


## 🚀 Installazione e Avvio

#





## ⚙️ Backend (Flask + Ollama)

1. **Avvia Ollama**:
   ```bash
   cd backend/
   sh ollama.sh
   ```

2. **Installa le dipendenze**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Esegui l'app Flask**:
   ```bash
   python app.py
   ```

#



## 🌐 Frontend (Angular)

1. **Installa le dipendenze**:
   ```bash
   cd frontend/
   sh req.sh
   ```

2. **Avvia il server Angular**:
   ```bash
   ng serve --disable-host-check
   ```

3. **Accedi all'applicazione**:
   Visita `http://localhost:4200` nel tuo browser.

#

## 🔗 Collegamento tra Front-end e Back-end

Per garantire che il tuo client Angular comunichi correttamente con il server, segui questi passaggi:

## 1️⃣ Verificare che il backend sia pubblico
- Assicurati che il backend sia accessibile pubblicamente.
- Controlla la presenza del **lucchetto** accanto all'URL nella barra degli indirizzi (indica connessione HTTPS sicura).
- Se la porta è chiusa, verifica le impostazioni del server e aprila manualmente, se necessario.

## 2️⃣ Inserire l'indirizzo corretto nel Front-end
- Apri il file `chat.component.ts`.
- Trova la riga con la configurazione del socket:

  ```typescript
  this.socket = io('https://5000-thammahetti-chatbotsite-aasn929c9qw.ws-eu118.gitpod.io/');

   

![Banner 1](https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg)

## 🤖 Funzionalità del Chatbot

- **Nome del bot**: `Prof. Storia`
- **Modello AI**: LLaMA 3 tramite Ollama
- **Ambito delle risposte**:
  - Domande sugli **Anni di Piombo**
  - Saluti e ringraziamenti (es. "Ciao", "Come stai?")
- **Lingua**: Italiano
- **Risposte**: Concise e pertinenti



![Banner 2](https://email.uplers.com/blog/wp-content/uploads/2024/11/image7-1.gif)

## 👥 Team di Sviluppo

- **Thejan**
- **Minasi**
- **Carovelli**
- **LaBarda**




![Sponsor](https://gaming-cdn.com/images/products/12406/616x353/nordvpn-2-anni-di-abbonamento-2-years-pc-gioco-cover.jpg?v=1705587183)

## 📌 Note Aggiuntive

- Il bot risponde solo a domande pertinenti agli Anni di Piombo o a interazioni generiche come saluti.
- Per modificare il comportamento del bot, consulta la funzione `get_chatbot_response` in `app.py`.

---


