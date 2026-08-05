const express=require('express');
const router=express.router();
const AuthUser=require('../middleware/auth.middleware');
const {addTransaction,getTransaction}=require('../controllers/transaction.controller')

router.use(AuthUser); //Every request sent to this route file must first pass through AuthUser.

router.post('/',addTransaction);
router.get('/',getTransaction);

module.exports=router;