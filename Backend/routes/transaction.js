const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const router = require('express').Router()


//Go to https://localhost:5000/api/v1/add-income to post data
router.post('/add-income',addIncome)
    .get('/get-incomes',getIncomes)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expense',addExpense)
    .get('/get-expenses',getExpense)
    .delete('/delete-expense/:id',deleteExpense)

module.exports = router;