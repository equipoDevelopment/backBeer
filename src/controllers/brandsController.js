const brandsModel = require ('../services/brandsModel');

const brandCtrl = {};

//Peticiones para mostrar marcas en home
brandCtrl.get_brands = async (req, res) => {
    try {
      const brands = await brandsModel.get_brands();
      return res.status(200).send(brands);
    } catch (error) {
        res.status(500).send(error.message);
    }
  };

  module.exports = brandCtrl;