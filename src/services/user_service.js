// const { response } = require('../app')
const userModel = require("../models/user_model");
const { requestResponse } = require("../utils");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const signup = async (data) => {
  try {
    data.password = bcrypt.hashSync(data.password, salt);
    await userModel.create(data);
    return (response = { ...requestResponse.success });
  } catch (error) {
    return (response = { ...requestResponse.failed });
  }
};

const signin = async (data) => {
  const User = await FindUserByEmail(data.email);
  if (User === null) {
    return requestResponse.unauthorized;
  } else {
    //   const token = await jwttoken.JwtSign(User);
    const matchPassword = await bcrypt.compareSync(
      data.password,
      User.password
    );
    if (!matchPassword) {
      return { ...requestResponse.unauthorized };
    } else {
      return { ...requestResponse.success };
    }
  }
};

const getUser = async () => {
  try {
    // await userModel.create(data)
    // return (response = {...requestResponse.success})
    const dataUser = await userModel.find();
    return (response = { ...requestResponse.success, dataUser });
  } catch (error) {
    return (response = { ...requestResponse.failed });
  }
};

const FindUserByEmail = async (email) => {
  return userModel.findOne({ email: email });
};

module.exports = { signup, getUser, signin };
