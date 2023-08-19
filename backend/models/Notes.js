const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        required:"General"
    },
    date:{
        type:String,
        default:Date.now
    }
  });

  module.exports=mongoose.model('notes',NotesSchema)