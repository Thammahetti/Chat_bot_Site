from flask import Flask
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
import threading
import ollama

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Funzione per inviare messaggio dal chatbot (ollama)
def get_chatbot_response(user_input):
    messages = [
        {"role": "user", "content": f"\n\nDomanda: {user_input}\nRisposta:"}
    ]
    response = ollama.chat(
        model='llama3',
        messages=messages,
        stream=False
    )

    print("🔍 Risposta completa da Ollama:", response)

    try:
        return response['message']['content']
    except Exception as e:
        print("❌ Errore nel parsing della risposta:", e)
        return "Errore durante la generazione della risposta."

@socketio.on('connect')
def handle_connect():
    print('Client connesso')

@socketio.on('message')
def handle_message(msg):
    print(f"Messaggio ricevuto dal client: {msg}", flush=True)
    response = get_chatbot_response(msg)
    print(f"risposta ricevuta da ollama: {response}", flush=True)
    emit('message', response)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
