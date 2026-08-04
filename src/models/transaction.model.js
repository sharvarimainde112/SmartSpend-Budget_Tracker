const mongoose=require('mongoose');

const transactionSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    description:{
        type:String,
        required:[true,'Please add a description'],
        trim:true,
    },
    amount:{
        type:Number,
        required:[true,'Please add a transaction amount'],
    },
    type:{
        type:String,
        required:true,
        enum:['Expense','Income'],
    },
    Category:{
        type:String,
        required:[true,'Please select a category'],
        enum:[
            'Food',
            'Transport',
            'Shopping',
            'Health',
            'Entertainment',
            'Salary',
            'Grocerry',
            'Other',
        ],
        default:'Other',
    },
    date: {
      type: Date,
      default: Date.now,
    },
},
{
    timestamps: true,
}
);

module.exports=mongoose.model('Transaction',transactionSchema);