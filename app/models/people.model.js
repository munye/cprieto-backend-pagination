const { Schema } = require("mongoose");
const { isValidObjectId } = require("mongoose");
const { mongoose } = require(".");


module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      _id: Schema.Types.ObjectId,
      orden: Number,
      isActive: Boolean,
      nombre: String,
      documento: String,
      genero: String,
      email: String,
      phone: String,
      direccion: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const People = mongoose.model("people", schema);
  return People;
};
