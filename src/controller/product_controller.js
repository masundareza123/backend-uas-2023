const productService = require("../services/product_service");
let response;
const { requestResponse } = require("../utils");

const addProduct = async (req, res) => {
  const data = req.body;
  try {
    const addProduct = await productService.create(data);
    response = { ...addProduct };
  } catch (error) {
    console.error(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

const getProduct = async (req, res) => {
  const data = req.body;
  try {
    const dataProduct = await productService.read(data);
    response = { ...dataProduct };
  } catch (error) {
    Logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

const updateProduct = async (req, res) => {
  const data = req.body;
  try {
    const dataProduct = await productService.update(data);
    response = { ...dataProduct };
  } catch (error) {
    //   Logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

const deleteProduct = async (req, res) => {
  console.log(req.params.product_guid);
  const product_guid = req.params.product_guid;
  try {
    const dataProduct = await productService.deleted(product_guid);
    response = { ...dataProduct };
  } catch (error) {
    console.log(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};
module.exports = { addProduct, getProduct, updateProduct, deleteProduct };
