const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
   members:{
    type:Array,
    required: true,
   }
});

const Convesation = mongoose.model('Convesation', conversationSchema);

module.exports = Convesation;