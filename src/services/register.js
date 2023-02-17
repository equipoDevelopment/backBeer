const User = require('../models/userSchema');
const Client = require('../models/clientSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../../config/config');
const emailSend = require('../services/sendMail');

// Función hash
encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
// Register User
exports.new_user = async (body) => {
    const email = body.email;
    const query = await User.findOne({ email });
    if (query) {
      return '✋🏼 Oppss! Usuario ya esta regitrado';
    } else {
      const data = {
        email: body.email,
        password: encryptPassword(body.password),
        role: 'client',
      };
      const user = new User(data);
      const newUser = await user.save(); 
  
      const client = {
        user_id: newUser._id,
        name: body.name,
        surname: body.surname,
        email: newUser.email,
        tel: body.tel,
        date_birth: body.date_birth,
        status: true,
        residence: {
          address: body.address,
          city: body.city,
          CP: body.cp,
        },
      };
      const Newclient = new Client(client); 
      await Client.create(Newclient); 
      let token = jwt.sign(  
        payload ={
          id: Newclient._id,
          name: Newclient.name,
  
        },
        config.secret,
        { expiresIn: 60 * 3 },
        { algorithm: 'RS256' }
      );

      // emailSend.sendMail(Newclient, token);
      console.log(token);
      return result = { "YourToken" :token } ;
    }
  };