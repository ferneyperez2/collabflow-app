import React from 'react';
import TarjetaTarea from './TarjetaTarea';

function ListaTareas({ tareas }) {
  return (
    <div>
      <h3>Tareas del Proyecto</h3>
      {tareas && tareas.length > 0 ? (
        tareas.map((tarea) => (
          <TarjetaTarea key={tarea.id} tarea={tarea} />
        ))
      ) : (
        <p>No hay tareas en este proyecto.</p>
      )}
    </div>
  );
}

export default ListaTareas;