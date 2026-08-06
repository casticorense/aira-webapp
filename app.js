function sendMessage(){

    const input =
    document.getElementById("userInput");

    const messages =
    document.getElementById("messages");

    messages.innerHTML +=
    `<p><b>Tú:</b> ${input.value}</p>`;

    messages.innerHTML +=
    `<p><b>AIRA:</b> Estoy procesando tu consulta...</p>`;

    input.value="";
}