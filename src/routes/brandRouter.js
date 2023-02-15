const { Router } = require("express");
const router = Router();
const brandCtrl = require("../controllers/brandsController");

// Routes for modelBrand
router.get("/get_brands", brandCtrl.get_brands);

module.exports = router;
