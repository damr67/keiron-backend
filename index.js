const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const routes = require('./routes');

function start() {
  try {
    const app = express();
    const port = process.env.PORT || 5000;

    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(compression());

    // Inicializar rutas
    app.use(routes);

    // Previous implementation. Maybe we want to run this when developing.
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error ? error.message : 'Error: something unexpected happened');
  }
}

// App incia aqui
start();
