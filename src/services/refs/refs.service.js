// Initializes the `refs` service on path `/refs`
const { Refs } = require("./refs.class");
const createModel = require("../../models/refs.model");
const hooks = require("./refs.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/refs", new Refs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("refs");

  service.hooks(hooks);
};
