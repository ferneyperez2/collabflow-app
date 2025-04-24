import React, { useState } from 'react';

function FormularioNuevoProyecto({ onProyectoCreado }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se manejará la lógica para crear un nuevo proyecto
    const nuevoProyecto = { nombre, descripcion, fechaCreacion: new Date() };
    console.log('Nuevo proyecto a crear:', nuevoProyecto);
    if (onProyectoCreado) {
      onProyectoCreado(nuevoProyecto); // Llamar a la función prop si existe
    }
    setNombre('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Crear Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Proyecto:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
}

export default FormularioNuevoProyecto;