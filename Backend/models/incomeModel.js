const mongoose =  require('mongoose');

const IncomeSchema = new IncomeSchema({
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
        type:Date,
        requied:true,
        trim:true   //removing spaces
    },
    catagory:{
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
},{timeStamps:true})

module.exports = mongoose.model('Income',IncomeSchema)