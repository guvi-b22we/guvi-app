const { ObjectId } = require("mongodb");

const db = require("../mongo");

const service = {
  async find(req, res) {
    const data = await db.posts.find().toArray();
    res.send(data);
  },
  async findById(req, res) {
    const data = await db.posts.findOne({ _id: new ObjectId(req.params.id) });
    res.send(data);
  },
  async insert(req, res) {
    const data = await db.posts.insertOne(req.body);
    res.send(data);
  },
  async updateById(req, res) {
    const data = await db.posts.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...req.body } }
    );
    res.send(data);
  },
  async deleteById(req, res) {
    const data = await db.posts.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(data);
  },
};

module.exports = service;
