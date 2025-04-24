import React from 'react';
import './components.css'; // Importa los estilos específicos

function TarjetaProyecto({ proyecto }) {
  return (
    <div className="tarjeta-proyecto">
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <small>Creado el: {new Date(proyecto.fechaCreacion).toLocaleDateString()}</small>
      {/* Aquí podríamos agregar más detalles o acciones del proyecto */}
    </div>
  );
}

export default TarjetaProyecto;