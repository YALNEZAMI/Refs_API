/* eslint-disable no-unused-vars */
const { Service } = require("feathers-mongoose");
exports.Refs = class Refs extends Service {
  constructor(options, app) {
    super(options);
  }
  async create(data, params) {
    return super.create(data, params);
  }
  async patch(id, data, params) {
    return super.patch(id, data, params);
  }
};
