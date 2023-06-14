const http = require("http");
const app = require("./src/app");
const dotenv = require("dotenv").config();
// const Configure = require("./src/configs")
// const server = http.createServer(Configure.credentials,app);
// const Logger=require('./src/utils/logger')

app.listen(process.env.PORT, () => {
   console.log(`Server Started On Port ${process.env.port} !!`)
});