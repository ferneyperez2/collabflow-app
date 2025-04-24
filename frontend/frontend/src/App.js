import React from 'react';
import Registro from './components/Registro';
import InicioSesion from './components/InicioSesion';
import ListaProyectos from './components/ListaProyectos';
import FormularioNuevoProyecto from './components/FormularioNuevoProyecto';
import VistaProyecto from './components/VistaProyecto';
import Dashboard from './components/Dashboard';
import VistaTarea from './components/VistaTarea';
import Chat from './components/Chat';

function App() {
  // Datos de ejemplo... (mantén los que ya tenías)
  const proyectosEjemplo = [ /* ... */ ];
  const tareasEjemploProyecto1 = [ /* ... */ ];
  const miembrosProyectoEjemplo = [ /* ... */ ];

  // Datos de ejemplo para una tarea detallada
  const tareaDetalleEjemplo = {
    id: 201,
    titulo: 'Implementar la funcionalidad de chat',
    descripcion: 'Desarrollar la interfaz y la lógica para el chat en tiempo real.',
    prioridad: 'Alta',
    fechaVencimiento: new Date(2025, 5, 1),
    estado: 'Pendiente',
    asignadoA: 'user3',
  };

  const handleProyectoCreado = (nuevoProyecto) => { /* ... */ };
  const handleTareaCreada = (nuevaTarea) => { /* ... */ };

  const proyectoSeleccionado = proyectosEjemplo[0];
  const tareasDelProyectoSeleccionado = tareasEjemploProyecto1;

  return (
    <div>
      <h1>CollabFlow</h1>
      <Registro />
      <InicioSesion />
      <Dashboard /> {/* Nuevo componente */}
      <ListaProyectos proyectos={proyectosEjemplo} />
      <FormularioNuevoProyecto onProyectoCreado={handleProyectoCreado} />
      {proyectoSeleccionado && (
        <VistaProyecto
          proyecto={proyectoSeleccionado}
          tareas={tareasDelProyectoSeleccionado}
          miembrosProyecto={miembrosProyectoEjemplo}
          onTareaCreada={handleTareaCreada}
        />
      )}
      <VistaTarea tareaInicial={tareaDetalleEjemplo} /> {/* Nuevo componente */}
      <Chat /> {/* Nuevo componente */}
    </div>
  );
}

export default App;