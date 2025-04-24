import React from 'react';
import TarjetaProyecto from './TarjetaProyecto';

function ListaProyectos({ proyectos }) {
  return (
    <div>
      <h2>Mis Proyectos</h2>
      {proyectos && proyectos.length > 0 ? (
        proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))
      ) : (
        <p>No tienes proyectos asignados.</p>
      )}
    </div>
  );
}

export default ListaProyectos;