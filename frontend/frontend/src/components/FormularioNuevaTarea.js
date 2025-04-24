import React, { useState } from 'react';

function FormularioNuevaTarea({ onTareaCreada, miembrosProyecto }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('Media');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [asignadoA, setAsignadoA] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaTarea = { titulo, descripcion, prioridad, fechaVencimiento, estado: 'Pendiente', asignadoA };
    console.log('Nueva tarea a crear:', nuevaTarea);
    if (onTareaCreada) {
      onTareaCreada(nuevaTarea);
    }
    setTitulo('');
    setDescripcion('');
    setPrioridad('Media');
    setFechaVencimiento('');
    setAsignadoA('');
  };

  return (
    <div>
      <h4>Crear Nueva Tarea</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
        <div>
          <label htmlFor="prioridad">Prioridad:</label>
          <select
            id="prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <div>
          <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
          <input
            type="date"
            id="fechaVencimiento"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
          />
        </div>
        {miembrosProyecto && miembrosProyecto.length > 0 && (
          <div>
            <label htmlFor="asignadoA">Asignar a:</label>
            <select
              id="asignadoA"
              value={asignadoA}
              onChange={(e) => setAsignadoA(e.target.value)}
            >
              <option value="">Sin asignar</option>
              {miembrosProyecto.map((miembro) => (
                <option key={miembro.id} value={miembro.id}>
                  {miembro.nombre}
                </option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
}

export default FormularioNuevaTarea;