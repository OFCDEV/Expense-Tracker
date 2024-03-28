const mongoose =  require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title: {
        type:String,
        requied:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        requied:true,
        maxLength:20,
        trim:true   //removing spaces
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:String,
        requied:true,
        trim:true   //removing spaces
    },
    category:{
        type:String,
        requied:true,
        trim:true   //removing spaces
    },
    description:{
        type:String,
        requied:true,
        maxLength:20,
        trim:true   //removing spaces
    },
},{timeStamps:true})    //timestamp-->when we updated/added

module.exports = mongoose.model('Income',IncomeSchema)