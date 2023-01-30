const userModel = require('../services/usersModel');
const login = require('../services/login');
const register = require('../services/register');


const usersCtrl = {};

usersCtrl.get_users = async (req, res, next) => {
  try {
    const users = await userModel.get_users();
    res.json(users, 200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

usersCtrl.delete_user = async (req, res) => {
  try {
    let user = await userModel.delete_user(req.params.id);
    res.json(
      {
        mensaje: '🔥 Eliminado correctamente 🔥',
      },
      200
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
};

usersCtrl.add_user = async (req, res) => {
  try {
    let user = await userModel.add_user(req.body);
    res.json(user, 201);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

usersCtrl.get_user = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.get_user({ _id: id });
    res.json(user, 200);
  } catch (error) {
    res.end(error.message).status(204);
  }
};

usersCtrl.edit_user = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    await userModel.edit_user(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// POST Register usuario
usersCtrl.register_user = async (req, res) => {
  body = req.body;
  try {
    let user = await register.new_user(req.body);
    res.json(user, 201);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// POST Login usuario 
usersCtrl.login_users = async (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password; 

  try {
    const body = await login.get_match(email, password);
    console.log(body);
    res.status(200).json(body);

  } catch (error) {
    res.status(500).send({ 'ERROR :': error.message });
  }
};


module.exports = usersCtrl;
