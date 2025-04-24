import React from 'react';
import ListaTareas from './ListaTareas';
import FormularioNuevaTarea from './FormularioNuevaTarea';

function VistaProyecto({ proyecto, tareas, miembrosProyecto, onTareaCreada }) {
  if (!proyecto) {
    return <div>Cargando información del proyecto...</div>;
  }

  return (
    <div>
      <h2>{proyecto.nombre}</h2>
      <p>{proyecto.descripcion}</p>

      <ListaTareas tareas={tareas} />
      <FormularioNuevaTarea onTareaCreada={onTareaCreada} miembrosProyecto={miembrosProyecto} />

      {/* Aquí podríamos agregar más funcionalidades como la lista de miembros del proyecto, chat, etc. */}
    </div>
  );
}

export default VistaProyecto;