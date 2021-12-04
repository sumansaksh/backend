const app = require(".")
const connect = require("./configs/db")

app.listen(8000, async () => {
    await connect();
    console.log("listening on port 8000");
  });