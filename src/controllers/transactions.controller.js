const Transaction=require('../models/transaction.model');

exports.addTransaction=async(req,res)=>{
try{

const{description,amount,type,Category}=req.body;

if(!description||!amount||!type){
    return res.status(400).json({message:'Please fill all the required fields'});
}
    const Transaction=await transaction.create({
        user:req.user._id,
        description,
        amount,
        type,
        Category,
    });
    return res.status(200).json({success:true,data:transaction})

   }
   catch(error){
    console.error("Error adding Transaction",error);
    return res.status(400).json({message:'Server error adding transaction'})
  }
};

exports.getTransaction=async(req,res)=>{

    try{
        const transactions= await Transaction.find({user:req.user._id.sort({date:-1})});

        let income=0;
        let expense=0;

        transaction.forEach((tx)=>{
            if(tx.type=='Income'){
                income+=tx.amount;
            }else if(tx.type=='Expense'){
                expense+=tx.amount;
            }
        });

        let totalBalance=income-expense;
        return res.status(200).json({success:true,summary:{totalBalance,totalincome:income,totalexpense:expense},
            count:transaction.length,
            data:transaction,
      });


    }catch(error){
        console.error("Error fetching transaction",error);
        return res.status(500).json({message:'Server error fetching transactions'})

    }
};

