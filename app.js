function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  const userText = input.value.trim();

  if (!userText) {
    return;
  }

  messages.innerHTML += `
    <p class="user-message">
      <strong>Tú:</strong> ${userText}
    </p>
  `;

  messages.innerHTML += `
    <p class="aira-message">
      <strong>AIRA:</strong> Estoy procesando tu consulta. En el siguiente paso me conectaremos con Copilot Studio.
    </p>
  `;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
