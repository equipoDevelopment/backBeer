const mongoose = require('mongoose');
const { config } = require('../../config/config');
mongoose.set('strictQuery', false);

// Si prefieres trabar en local cambia a config.uri_local o config.uri_localNoPassword
mongoose.connect(config.uri)
  .then(db => console.log("🟢 Conectado a la bases datos: " + db.connection.name))
  .catch(err => console.log("🔴 Error en la conexión DB: " + err));  

