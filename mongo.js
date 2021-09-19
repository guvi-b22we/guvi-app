const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URL);

const mongo = {
  posts: null,
  users: null,

  async connect() {
    await client.connect(); // Connecting to DB
    const db = client.db(process.env.MONGODB_NAME); // Selecting DB
    console.log("Mongo DB Connected");

    this.posts = db.collection("posts");
    this.users = db.collection("users");
  },
};

module.exports = mongo;
