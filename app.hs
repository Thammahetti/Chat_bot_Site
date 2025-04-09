import ollama

print("##############")
print("PIOMBOBOT")
print("##############")

while True:
    userinput = input("You: ").strip().lower()

    print("Piombobot: ", end="")  # Inizia a stampare la risposta senza andare a capo

    # Costruisci il messaggio correttamente
    messages = [
        {"role": "user", "content": f" Rispondi alla seguente domanda usando solo informazioni relative agli Anni di Piombo se non centra niente allora non rispondere però rispondi a domande di presetazione del utente (com'è stai ? o ciao). Rispondi in breve, più veloce possibile:\n\nDomanda: {userinput}\nRisposta:"}
    ]

    # Usa lo streaming con ollama.chat
    response = ollama.chat(
        model='llama3',
        messages=messages,
        stream=True
    )

    # Stampa la risposta man mano che viene generata
    for chunk in response:
        print(chunk['message']['content'], end="", flush=True)  # Stampa i pezzi della risposta

    print()  # Vai a capo alla fine della risposta
