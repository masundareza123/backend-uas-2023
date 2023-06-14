const companyModel = require ('../models/company_model');
const {requestResponse} = require ('../utils');
const uuid = require("uuid");

const create = async (data) => {
    try {
      data.guid_company = uuid.v4();
      await companyModel.create(data);
      return (response = { ...requestResponse.success });
    } catch (error) {
      return (response = { ...requestResponse.error_response });
    }
  };


const read = async (data) => {
    try {
        const dataCompany = await companyModel.find()
        return (response = {...requestResponse.success, dataCompany})
    } catch (error) {
        return (response = {...requestResponse.failed})
    }
};

const update = async (data) => {
    const {guid_company} = data
    try {
        const dataCompany = await findGuid(guid_company);
        console.log(dataCompany)
        if (dataCompany == null) {
          return (response = { ...requestResponse.failed });
        } else {
          await companyModel.findOneAndUpdate({ guid_company: guid_company }, { $set: data });
          return (response = { ...requestResponse.success });
        }
      } catch (error) {
        console.log(error);
        return (response = { ...requestResponse.failed });
        
      }
};

const deleted = async (guid_company) => {
    // const {guid_company} = data
    console.log(guid_company)
  try {
    const dataCompany = await findGuid(guid_company);
    if (dataCompany == null) {
      return (response = { ...requestResponse.failed });
    } else {
      await companyModel.findOneAndDelete({ guid_company: guid_company });
      return (response = { ...requestResponse.success });
    }
  } catch (error) {
    console.log(error);
    return (response = { ...requestResponse.failed });
  }
};

const findGuid = async (guid) => {
    return await companyModel.findOne({ guid_company: guid});
  };

module.exports = {create, read, update, deleted};