const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const sfthreeSchema = new Schema({
    email:{
        type: String,
        required : true,
        
    },
    sf20:{
        type: String,
        required : true
    },
    sf21:{
        type: String,
        required : true
    },
    sf22:{
        type: String,
        required : true
    },
    sf23:{
        type: String,
        required : true
    },
    sf24:{
        type: String,
        required : true
    },
    sf25:{
        type: String,
        required : true
    },
    sf26:{
        type: String,
        required : true
    },
    sf27:{
        type: String,
        required : true
    },
    sf28:{
        type: String,
        required : true,
        
    },
    sf29:{
        type: String,
        required : true
    },
    sf30:{
        type: String,
        required : true
    },
    sf31:{
        type: String,
        required : true
    },
    sf32:{
        type: String,
        required : true
    },
    sf33:{
        type: String,
        required : true
    },
    sf34:{
        type: String,
        required : true
    },
    sf35:{
        type: String,
        required : true
    },
    sf36:{
        type: String,
        required : true
    }

});


const SfthreeModel = db.model('SFthree',sfthreeSchema);

module.exports = SfthreeModel;