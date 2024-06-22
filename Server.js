const http = require("http");
const app =require("./App");
const PORT = process.env.port || 8000;
const server = http.createServer(app);
app.listen(PORT)
module.exports = server;
