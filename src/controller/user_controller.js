const userService = require("../services/user_service");
let response;
const { requestResponse } = require("../utils");

const UserCreate = async (req, res) => {
  const data = req.body;
  try {
    const usercreate = await userService.signup(data);
    response = { ...usercreate };
  } catch (error) {
    Logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

const getUser = async (req, res) => {
  const data = req.body;
  try {
    const usercreate = await userService.getUser(data);
    response = { ...usercreate };
  } catch (error) {
    Logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

const userLogin = async (req, res) => {
  const data = req.body;
  try {
    const userLogin = await userService.signin(data);
    response = { ...userLogin };
  } catch (error) {
    console.log(error);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

module.exports = { UserCreate, getUser, userLogin };
