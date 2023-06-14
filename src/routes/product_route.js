const productController = require("../controller/product_controller");
const express = require("express");
const router = express.Router();

router.post("/create", productController.addProduct);
router.post("/read", productController.getProduct);
router.post("/update", productController.updateProduct);
router.delete("/delete/:product_guid", productController.deleteProduct);

module.exports = router;
