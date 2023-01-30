const mongoose = require('mongoose');
const { config } = require('../../config/config');
mongoose.set('strictQuery', true);
// Si prefieres trabar en local cambia a config.uri_local o config.uri_localNoPassword
mongoose.connect(config.uri)
  .then(() => console.log("🟢 La conexión MongoDB tuvo éxito."))
  .catch(err => console.log("🔴 Error en la conexión DB: " + err));  

