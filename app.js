const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
