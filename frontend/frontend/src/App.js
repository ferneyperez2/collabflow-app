import React from 'react';
import Registro from './components/Registro';
import InicioSesion from './components/InicioSesion';
import ListaProyectos from './components/ListaProyectos';
import FormularioNuevoProyecto from './components/FormularioNuevoProyecto';
import ListaTareas from './components/ListaTareas';
import FormularioNuevaTarea from './components/FormularioNuevaTarea';

function App() {
  // Datos de ejemplo para la lista de proyectos
  const proyectosEjemplo = [
    { id: 1, nombre: 'Desarrollo de la Nueva Web', descripcion: 'Creación de la nueva página web de la empresa.', fechaCreacion: new Date() },
    { id: 2, nombre: 'Implementación de API', descripcion: 'Desarrollo de la API para la integración con otros servicios.', fechaCreacion: new Date() },
  ];

  // Datos de ejemplo para la lista de tareas
  const tareasEjemplo = [
    { id: 101, titulo: 'Diseñar la página de inicio', descripcion: 'Crear el mockup y el diseño visual de la homepage.', prioridad: 'Alta', fechaVencimiento: new Date(2025, 4, 5), estado: 'En Progreso', asignadoA: 'Usuario 1' },
    { id: 102, titulo: 'Implementar la API de autenticación', descripcion: 'Desarrollar los endpoints para el login y registro de usuarios.', prioridad: 'Media', fechaVencimiento: new Date(2025, 4, 10), estado: 'Pendiente', asignadoA: 'Usuario 2' },
  ];

  // Datos de ejemplo para los miembros del proyecto
  const miembrosProyectoEjemplo = [
    { id: 'user1', nombre: 'Alice' },
    { id: 'user2', nombre: 'Bob' },
  ];

  const handleProyectoCreado = (nuevoProyecto) => {
    console.log('Proyecto creado en App:', nuevoProyecto);
    // Aquí se haría la lógica para actualizar la lista de proyectos
  };

  const handleTareaCreada = (nuevaTarea) => {
    console.log('Tarea creada en App:', nuevaTarea);
    // Aquí se haría la lógica para actualizar la lista de tareas
  };

  return (
    <div>
      <h1>CollabFlow</h1>
      <Registro />
      <InicioSesion />
      <ListaProyectos proyectos={proyectosEjemplo} />
      <FormularioNuevoProyecto onProyectoCreado={handleProyectoCreado} />
      <ListaTareas tareas={tareasEjemplo} />
      <FormularioNuevaTarea onTareaCreada={handleTareaCreada} miembrosProyecto={miembrosProyectoEjemplo} />
    </div>
  );
}

export default App;