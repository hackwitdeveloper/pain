const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const sftwoSchema = new Schema({
    email:{
        type: String,
        required : true,    
    },
    sf13:{
        type: String,
        required : true
    },
    sf14:{
        type: String,
        required : true
    },
    sf15:{
        type: String,
        required : true
    },
    sf16:{
        type: String,
        required : true
    },
    sf17:{
        type: String,
        required : true
    },
    sf18:{
        type: String,
        required : true,
        
    },
    sf19:{
        type: String,
        required : true
    },
    

});


const SftwoModel = db.model('SFtwo',sftwoSchema);

module.exports = SftwoModel;