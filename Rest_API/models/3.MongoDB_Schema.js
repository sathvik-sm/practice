const mongoose = require('mongoose');
const { type } = require('node:os');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name: {
        type:String,
        required: [true,'Name field is required!']
    },
    rank: {
        type: String
    },
    available:{
        type:Boolean,
        default: false
    }
    
});

const Ninja = mongoose.model('ninja',NinjaSchema);

/*
const Ninja = mongoose.model('ninja', NinjaSchema);

means:
'ninja' is the model name.
Mongoose infers the collection name as ninjas by pluralizing the model name.
The Ninja variable is the JavaScript Model you use in your code. 
*/

//Export this Model, so we can use it in our routes, when we send a post-request!
module.exports = Ninja;


/*
---------------------------------------------------------------------------------------------------------------------------------
You wrote:
const Ninja = mongoose.model('ninja', NinjaSchema);

This does not create a database.
It also doesn't directly create a collection.
Instead it creates a Model.

A Model is simply a JavaScript class that lets you interact with MongoDB.

MongoDB
        ↑
     Model
        ↑
     Your code

You never directly talk to MongoDB.

You always talk to the Model.

For example:
Ninja.create(...) // I have used this create method in the API.js file!

or

Ninja.find(...)

or

Ninja.deleteOne(...)

These are methods of the Model.
---------------------------------------------------------------------------------------------------------------------------------
Does the Model exist inside MongoDB?

No.

This is one of the biggest misconceptions.

The Model exists only in your Node.js program.

Node.js

Ninja Model
      │
      ▼
MongoDB
      │
      ▼
Database
      │
      ▼
Collection
      │
      ▼
Documents

When your server stops,

the Model disappears.

The database remains.
---------------------------------------------------------------------------------------------------------------------------------

Internally this is roughly what happens:

Postman
↓
Express
↓
req.body
↓
Ninja Model
↓
Checks NinjaSchema
↓
Valid?
↓
Insert into collection "ninjas"
↓
Database "Ninjas"
↓
MongoDB
---------------------------------------------------------------------------------------------------------------------------------
*/