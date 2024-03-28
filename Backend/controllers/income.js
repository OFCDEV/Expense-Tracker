
const IncomeSchema = require("../models/incomeModel")
//This will export the addIncome method to transaction.js file
exports.addIncome = async(req,res)=>{
    // console.log(req.body);
    //This data comes from user-input; Here I use postman software to post data in body as JSON


    //Destructuring
    const {title,amount,category,description,date} = req.body;

    const income =new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });    //creating new instance
    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({message:'All fields are required'})
        }if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message:"Amount must be a positive number"})
        }
        await income.save()
        res.status(200).json({message:"Income Added"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error"})

    }
    console.log(income);

}

exports.getIncomes = async(req,res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1}) //Sorting by latest data added
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:"Server Error"}) 
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Income Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
}
//deleteIncome method will work when an user gave the id(He can get the id by /getIncomes)
//http://localhost:5000/api/v1/deleteIncome/:id