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
  