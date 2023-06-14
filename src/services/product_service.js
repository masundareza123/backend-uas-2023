const productModel = require("../models/product_model");
const { requestResponse } = require("../utils");
const uuid = require("uuid");

const create = async (data) => {
  try {
    data.product_guid = uuid.v4();
    await productModel.create(data);
    return (response = { ...requestResponse.success });
  } catch (error) {
    return (response = { ...requestResponse.error_response });
  }
};

const read = async (data) => {
  try {
    const dataProduct = await productModel.find();
    return (response = { ...requestResponse.success, dataProduct });
  } catch (error) {
    return (response = { ...requestResponse.failed });
  }
};

const update = async (data) => {
  const { product_guid } = data;
  try {
    const dataProduct = await findGuid(product_guid);
    console.log(dataProduct);
    if (dataProduct == null) {
      return (response = { ...requestResponse.failed });
    } else {
      await productModel.findOneAndUpdate(
        { product_guid: product_guid },
        { $set: data }
      );
      return (response = { ...requestResponse.success });
    }
  } catch (error) {
    console.log(error);
    return (response = { ...requestResponse.failed });
  }
};

const deleted = async (product_guid) => {
  // const {guid_company} = data
  console.log(product_guid);
  try {
    const dataProduct = await findGuid(product_guid);
    if (dataProduct == null) {
      return (response = { ...requestResponse.failed });
    } else {
      await productModel.findOneAndDelete({ product_guid: product_guid });
      return (response = { ...requestResponse.success });
    }
  } catch (error) {
    console.log(error);
    return (response = { ...requestResponse.failed });
  }
};

const findGuid = async (guid) => {
  return await productModel.findOne({ product_guid: guid });
};

module.exports = { create, read, update, deleted };
