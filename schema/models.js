const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const ElementSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    isContainer: {
      type: Boolean,
      default: true,
    },
    imageUrl:{ 
        type: String,
        default:"defaultImage"},

        contains:{
          type: Array,
            default:"defaultImage"}
  });


  const ItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    isContainer: {
      type: Boolean,
      default: true,
    },
    imageUrl:{ 
        type: String,
        default:"defaultImage"},
  });

const User = mongoose.model("User", UserSchema);
const Element = mongoose.model("Element", ElementSchema);
const Item =  mongoose.model("Item", ItemSchema);

module.exports = {userModel: User, elementModel: Element, itemModel: Item};