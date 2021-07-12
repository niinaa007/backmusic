const express = require('express');
const app = express();
const port = 3001;
const tareasAPI = require('./rutas/musica');

app.use(express.json());
musicaAPI(app);

app.listen(port, () => {
console.log(`servidor escuchando en ${port}`);
})
