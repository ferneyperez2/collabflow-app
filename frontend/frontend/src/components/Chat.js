import React, { useState } from 'react';

function Chat() {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mensaje.trim()) {
      const nuevoMensaje = {
        texto: mensaje,
        usuario: 'Yo', // Simulación del usuario
        timestamp: new Date().toLocaleTimeString(),
      };
      setMensajes([...mensajes, nuevoMensaje]);
      setMensaje('');
    }
  };

  return (
    <div>
      <h3>Chat del Proyecto</h3>
      <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {mensajes.map((msg, index) => (
          <div key={index}>
            <small>{msg.timestamp} - {msg.usuario}:</small> {msg.texto}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mensaje}
          onChange={handleInputChange}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;