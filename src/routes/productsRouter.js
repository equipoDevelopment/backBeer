const { Router } = require("express");
const router = Router();
const productosCtrl = require("../../src/controllers/productsController");
const brandCtrl = require("../controllers/brandsController");

// CRUD Admin for Routes Products
router.get("/get_products", productosCtrl.get_products);
router.post("/add_product", productosCtrl.add_product);
router.delete("/delete_product/:id", productosCtrl.delete_product);
router.get("/get_product/:id" ,productosCtrl.get_product);
router.put("/edit_product/:id" ,productosCtrl.edit_product);
router.get("/get_productBrand/:brand" ,productosCtrl.get_productBrand);

// Routes for home/store
router.get("/get_productCategory/:category", productosCtrl.get_productCategory);
router.get("/get_productBrand/:brand", productosCtrl.get_productBrand);
router.get("/get_productGraduation/:graduation", productosCtrl.get_productGraduation);
router.get("/get_productScore/:score", productosCtrl.get_productScore);
router.get("/get_productPrice/:price", productosCtrl.get_productPrice);
router.get("/get_productsNovelty" ,productosCtrl.get_productsNovelty);
router.get("/get_brands", brandCtrl.get_brands);

module.exports = router;