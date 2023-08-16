const express = require("express");
const cors = require("cors");

const { typeError } = require("./middlewares/errors");

const app = express();
app.use(cors())
const PORT = 8080;

app.use(express.json());

app.use("/orders", require("./routes/orders"));
app.use("/shoes", require("./routes/shoes"));
app.use("/types", require("./routes/types"));
app.use("/users", require("./routes/users"));
app.use("/reviews", require("./routes/reviews"));

app.use(typeError);

app.listen(PORT, () =>
  console.log("Server successfully created on the port " + PORT)
);
