const ordersModel = require ('../services/ordersModel')

const ordersCtrl = {};

ordersCtrl.get_orders = async (req, res, next) => {
  try {
    const orders = await ordersModel.get_orders();
    res.status(200).send(orders);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

ordersCtrl.delete_order = async (req, res) => {
  try {
    let order = await ordersModel.delete_order(req.params.id);
    res.json({
      mensaje: "🔥 Eliminado correctamente 🔥",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

ordersCtrl.add_order = async (req, res) => {
  try {
    let order = await ordersModel.add_order(req.body);
      res.status(201).send(order);
  } catch (error) {
     res.status(500).send(error.message);
  }
};

ordersCtrl.get_order = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await ordersModel.get_order({ _id: id });
      res.send(order).status(200)
  } catch (error) {
      res.end(error.message).status(204);
  }
};

ordersCtrl.edit_order = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    await ordersModel.edit_order(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = ordersCtrl;
