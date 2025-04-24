import React from 'react';

function TarjetaProyecto({ proyecto }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <small>Creado el: {new Date(proyecto.fechaCreacion).toLocaleDateString()}</small>
      {/* Aquí podríamos agregar más detalles o acciones del proyecto */}
    </div>
  );
}

export default TarjetaProyecto;