/*

MongoDB uses GeoJSON(Just a format on how to store address!) internally to handle geo-location!

This is how the format looks like:
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

Focus on the geometry property:
"geometry": {
    "type": "Point", -> Type is mentioned as "Point" -> There are different types like Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. MultiLineString can be used to plot a route on a map!
    "coordinates": [125.6, 10.1] -> Co-ordinates are the latitude and longitude!
  },
*/



const mongoose = require('mongoose');
const { type } = require('node:os');
const Schema = mongoose.Schema;

/*Now I can add the GeoJSON properties within the NinjaSchema only but I will just create a seperate Schema, and we will use this seperately created Schema within NinjaSchema!
Create geolocation Schema:
Use this for reference:
"geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
}
*/

const GeoSchema = new Schema({
    type:{ //This type is telling the type of co-ordinate it is on the map!
        type: String, //This is telling the type of data, which is a string
        default: "Point"
    },
    coordinates:{
        type:[Number], //An array of number
        index: "2dsphere" //Type of Map we want to use. Map you see on Zepto is 2D, here we will be using a map like Google-Earth
    }
});

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
    },
    geometry: GeoSchema 
    
});

const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;