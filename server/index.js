require("dotenv").config();

const app = require("express")();
const http = require("http").createServer(app);
const cors = require("cors");

const { version } = require("./package.json");

const routes = require("./routes");

const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "git-logs-api",
    version
  });
});

app.use("/commits", routes);

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
