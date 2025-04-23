const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend de CollabFlow!');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});