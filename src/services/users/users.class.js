const { Service } = require("feathers-mongoose");

exports.Users = class Users extends Service {
  constructor(options, app) {
    super(options);
    this.app = app;
  }
  async create(data, params) {
    const userData = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    };
    const user = await super.create(userData, params);
    return user;
  }
};
