const productModel = require ('../services/productsModel');


const productosCtrl = {};

productosCtrl.get_products = async (req, res) => {
  try {
    const products = await productModel.get_products();
    res.json(products, 200);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

productosCtrl.delete_product = async (req, res) => {
  try {
    let product = await productModel.delete_product(req.params.id);
    res.json({
      mensaje: "🔥 Eliminado correctamente 🔥",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

productosCtrl.add_product = async (req, res) => {
  try {
    let product = await productModel.add_product(req.body);
      res.json(product, 201);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

productosCtrl.get_product = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.get_product({ _id: id });
      res.send(product).status(200)
  } catch (error) {
      res.end(error.message).status(204);
  }
};

productosCtrl.edit_product = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    await productModel.edit_product(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

productosCtrl.get_productBrand = async (req, res) => {
  const brand = req.params.brand;
  try {
    const product = await productModel.get_brand(brand);
      res.send(product).status(200);
  } catch (error) {
      res.end(error.message).status(500);
  }
};

productosCtrl.get_productCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const product = await productModel.get_category(category);
    res.send(product).status(200);
  } catch (error) {
      res.end(error.message).status(500);
  }
};

productosCtrl.get_productGraduation = async (req, res) => {
  const graduation = req.params.graduation;
  try {
    const product = await productModel.get_graduation(graduation);
    res.send(product).status(200);
  } catch (error) {
      res.end(error.message).status(500);
  }
};

productosCtrl.get_productScore = async (req, res) => {
  const score = req.params.score;
  try {
    const product = await productModel.get_score(score);
    res.send(product).status(200);
  } catch (error) {
      res.end(error.message).status(500);
  }
};

productosCtrl.get_productPrice = async (req, res) => {
  const price = req.params.price;
  try {
    const product = await productModel.get_price(price);
    res.send(product).status(200);
  } catch (error) {
      res.end(error.message).status(500);
  }
};

productosCtrl.get_productsNovelty = async (req, res) => {
  try {
    const products = await productModel.get_productsNovelty();
    res.json(products, 200);
  } catch (error) {
      res.status(500).send(error.message);
  }
};



module.exports = productosCtrl;

