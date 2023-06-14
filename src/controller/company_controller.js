const companyService = require("../services/company_service");
let response;
const { requestResponse } = require("../utils");

const addCompany = async (req, res) => {
    const data = req.body;
    try {
        const addCompany = await companyService.create(data);
        response = {...addCompany};
    } catch (error) {
        console.error(error);
        response = {...requestResponse.server_error};
    }
    res.status(response.code).json(response);
};

const getCompany = async (req, res) => {
    const data = req.body;
    try {
      const dataCompany = await companyService.read(data);
      response = { ...dataCompany };
    } catch (error) {
      Logger.error(error);
      response = { ...requestResponse.server_error };
    }
    res.status(response.code).json(response);
};

const updateCompany = async (req, res) => {
    const data = req.body;
    try {
      const dataCompany = await companyService.update(data);
      response = { ...dataCompany };
    } catch (error) {
    //   Logger.error(error);
      response = { ...requestResponse.server_error };
    }
    res.status(response.code).json(response);
};

const deleteCompany = async (req, res) => {
    console.log(req.params.guid_company)
    const guid_company = req.params.guid_company;
    try {
        const dataCompany = await companyService.deleted(guid_company);
        response = { ...dataCompany };
      } catch (error) {
        console.log(error)
        response = { ...requestResponse.server_error };
      }
      res.status(response.code).json(response);
};
module.exports = {addCompany, getCompany, updateCompany, deleteCompany};