const Merchant = require('../models/Merchant')

//retrive all merchant
const merchantList =  async(req,res) => {
   try {
        const merchants = await Merchant.find()
        
        res.json(merchants);
   }catch(err){
       res.send('Error' + err)
   }
}

//find merchant by its' id

const findMerchant = async(req,res)=>{
    try{
        const merchant = await Merchant.findById(req.params.id)
        res.json(merchant);
    }catch(err){
        res.send('Error' + err)
    }
}



const createMerchant = async(req,res) => {   
    try {
         const merchant= await Merchant.create({ ...req.body });
         res.status(200).json(merchant);
    } catch(err){
        res.send('Error' + err)
    }  
 }




const updateMerchant = async (req,res)=> {
    try{
        const recipe = await Recipe.updateOne({_id: req.params.id}, { ...req.body})
        return res.send("Merchant info has been updated successfully")
    
    }catch(err){
        res.send('Error' + err)
    } 
}


const deleteMerchant = async (req, res) => {
    try{
        const merchant = await Merchant.findByIdAndDelete(req.params.id)
        if (!merchant) throw Error('No merchant found')
        return res.send('The merchant has been deleted sucessfully')
    }catch(err){
        res.send('Error' + err)
    }
}

module.exports = {
    merchantList,
    findMerchant,
    createMerchant,
    updateMerchant,
    deleteMerchant
}
