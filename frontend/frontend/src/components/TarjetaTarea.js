import React from 'react';

function TarjetaTarea({ tarea }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', marginBottom: '8px' }}>
      <h4>{tarea.titulo}</h4>
      <p>{tarea.descripcion}</p>
      <small>Prioridad: {tarea.prioridad}</small>
      <small>Vencimiento: {tarea.fechaVencimiento ? new Date(tarea.fechaVencimiento).toLocaleDateString() : 'Sin fecha'}</small>
      <small>Estado: {tarea.estado}</small>
      {tarea.asignadoA && <small>Asignado a: {tarea.asignadoA}</small>}
      {/* Aquí podríamos agregar botones para editar, eliminar, cambiar estado, etc. */}
    </div>
  );
}

export default TarjetaTarea;