// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const schema = new mongooseClient.Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },

      email: { type: String, unique: true, lowercase: true },
      password: { type: String, required: true },

      /*auth0Id: { type: String },

      googleId: { type: String },

      facebookId: { type: String },

      twitterId: { type: String },

      githubId: { type: String },
      */
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
