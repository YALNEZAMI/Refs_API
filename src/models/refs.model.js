// refs-model.js - A mongoose model
//
//categories that can be used
const categories = [
  "programming",
  "design",
  "business",
  "marketing",
  "music",
  "cinema",
  "art",
  "other",
];
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "refs";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      id_User: { type: String, required: true },
      title: { type: String, required: true },
      details: { type: String, required: true },
      category: { type: String, enum: categories, required: true },
      likers: [{ type: String }, { default: [] }],
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
