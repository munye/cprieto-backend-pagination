module.exports = app => {
  const people = require("../controllers/people.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", people.create);

  // Retrieve all Tutorials
  router.get("/", people.findAll);

  // Retrieve all published Tutorials
  router.get("/published", people.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", people.findOne);

  // Update a Tutorial with id
  router.put("/:id", people.update);

  // Delete a Tutorial with id
  router.delete("/:id", people.delete);

  // Create a new Tutorial
  router.delete("/", people.deleteAll);

  app.use("/api/people", router);
};
