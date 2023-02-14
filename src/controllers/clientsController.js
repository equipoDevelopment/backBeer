const clientModel = require ('../services/clientsModel')

const clientsCtrl = {};

clientsCtrl.get_clients = async (req, res, next) => {
  try {
    const clients = await clientModel.get_clients();
    res.status(200).send(clients);//cambiado json por send
  } catch (error) {
      res.status(500).send(error.message);
  }
};

clientsCtrl.delete_client = async (req, res) => {
  try {
    let client = await clientModel.delete_client(req.params.id);
    res.json({
      mensaje: "🔥 Eliminado correctamente 🔥",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

clientsCtrl.add_client = async (req, res) => {
  try {
    let client = await clientModel.add_client(req.body);
      res.status(201).send(client);//cambiado json por send
  } catch (error) {
     res.status(500).send(error.message);
  }
};

clientsCtrl.get_client = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await clientModel.get_client({ _id: id });
      res.send(client).status(200)
  } catch (error) {
      res.end(error.message).status(204);
  }
};

clientsCtrl.edit_client = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    await clientModel.edit_client(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = clientsCtrl;
