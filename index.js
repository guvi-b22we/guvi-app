const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Mongo
const mongo = require("./mongo");

// Routes
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

const authService = require("./services/auth.services");

const app = express();

async function loadApp() {
  try {
    await mongo.connect();

    app.use(express.json());
    app.use(cors());

    app.use("/auth", authRoutes);

    app.use(authService.validateToken);

    app.use("/posts", postRoutes);

    app.listen(process.env.PORT, () =>
      console.log(`Server running at port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("Server facing issues");
    console.log(err);
  }
}

loadApp();
