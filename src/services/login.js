const User = require('../models/userSchema');
const Client = require('../models/clientSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../../config/config');


// Login User
exports.get_match = async (email, password) => {
    data = await User.findOne({ email });
  
    if (data) {
      const passwordDB = data.password;
      const match = bcrypt.compareSync(password, passwordDB);  
      if (match) {
        id = data._id.toString();
        const client = await Client.findOne({ user_id: id });
        let token = jwt.sign(    
          {
            id: client._id,
            name: client.name,
            role : data.role
    
          },
          config.secret,
          { expiresIn: 60 * 60 },
          { algorithm: 'RS256' }
        ); 
        
        return { name : client.name, token };
      } else {
        return 'Password is not valid';
      }
    } else {
      return 'User is not registered';
    }
};
  

  // TODO verificar el token y si no esta expirado y es valido permitir login al usario devolviendo un nuevo token de larga expiracion (2h.) y dando permiso a las rutas protegidas.
  // Si pasa el tiemnpo de expiración o el token no es valido, borrar los datos del usuario del registro pasado el tiempo de expiración (3min).
exports.tokenVeryfy = (token) => {
  
  result = jwt.verify(token, config.secret)

  return result
}
  