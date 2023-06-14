const companyController = require("../controller/company_controller");
const express = require("express");
const router = express.Router();

router.post("/create", companyController.addCompany);
router.post("/read", companyController.getCompany);
router.post("/update", companyController.updateCompany);
router.delete("/delete/:guid_company", companyController.deleteCompany);

module.exports = router;
