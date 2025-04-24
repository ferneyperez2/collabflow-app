import React, { useState } from 'react';

function VistaTarea({ tareaInicial }) {
  const [tarea, setTarea] = useState(tareaInicial);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTarea({ ...tarea, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tarea actualizada:', tarea);
    // Aquí se manejaría la lógica para guardar los cambios en el backend
  };

  if (!tarea) {
    return <div>Cargando detalles de la tarea...</div>;
  }

  return (
    <div>
      <h3>Detalles de la Tarea</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" value={tarea.titulo} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" value={tarea.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="prioridad">Prioridad:</label>
          <select name="prioridad" value={tarea.prioridad} onChange={handleChange}>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <div>
          <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
          <input type="date" id="fechaVencimiento" name="fechaVencimiento" value={tarea.fechaVencimiento ? tarea.fechaVencimiento.slice(0, 10) : ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <select name="estado" value={tarea.estado} onChange={handleChange}>
            <option value="Pendiente">Pendiente</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
        {tarea.asignadoA && (
          <div>
            <label htmlFor="asignadoA">Asignado a:</label>
            <input type="text" id="asignadoA" name="asignadoA" value={tarea.asignadoA} readOnly />
          </div>
        )}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default VistaTarea;