var mongoose = require('mongoose');

var paletteSchema = mongoose.Schema({
    name: String,
    description: String,
    inspiration: Array,
    colors: Array,
 });
 
 var paletteModel = mongoose.model('palette', paletteSchema);

 module.exports = paletteModel