import React from 'react';
import ListaProyectos from './ListaProyectos';
// Importa otros componentes que quieras mostrar en el dashboard

function Dashboard() {
  // Datos de ejemplo para la lista de proyectos (temporal)
  const proyectosEjemplo = [
    { id: 1, nombre: 'Desarrollo de la Nueva Web', descripcion: 'Creación de la nueva página web de la empresa.', fechaCreacion: new Date() },
    { id: 2, nombre: 'Implementación de API', descripcion: 'Desarrollo de la API para la integración con otros servicios.', fechaCreacion: new Date() },
  ];

  return (
    <div>
      <h2>Panel de Control</h2>
      <ListaProyectos proyectos={proyectosEjemplo} />
      {/* Aquí podrías agregar más componentes como una lista de tareas pendientes, notificaciones, etc. */}
    </div>
  );
}

export default Dashboard;