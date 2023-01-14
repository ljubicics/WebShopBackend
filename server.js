const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 8080;

app.listen(8080, async () => {
  console.log(`App listens on port ${port}`);
});
