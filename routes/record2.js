const { application } = require("express");
const express = require("express");

const {userModel, elementModel, itemModel} = require("../schema/models.js")


const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    console.log("request body", request.body)
    console.log("user", user)
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/add_element", async (request, response) => {
    const element = new elementModel(request.body);

    console.log("request body", request.body)
    console.log("element", element)
  
    try {
      await element.save();
      response.send(element);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {

  const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_item", async (request, response) =>{

    const item = new itemModel(request.body);

    try {
      await item.save();
      response.send(item);
      await elementModel.findOneAndUpdate({ _id: "637371904e79b2a678b82078" }, {$push:{ contains: item }});
      console.log(item)

    } catch (error) {
      response.status(500).send(error);
    }
  })

app.get("/items/:name", async (request, response) => {

  const getItemById = await itemModel.find( {name: request.params.name} );
  try {
    response.send(getItemById);
    console.log("Inside of Item Get")
    console.log(request.params.name)
    console.log(getItemById)
  } catch (error) {
    response.status(500).send(error);
  }
    
})

module.exports =  app;