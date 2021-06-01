const http = require("http");
const app = require("./app.js");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

//Set server on listening
try {
  server.listen(port, () =>
    console.log(`The server is running and listening on port: ${port}...`)
  );
} catch (error) {
  console.log(`Something went wrong ${error}`);
}
