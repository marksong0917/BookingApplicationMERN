
const Merchant = require('../models/Merchant')
const { userAuth, checkRole } = require("../controllers/Auth");
const { response } = require('express');

//retrive all merchant
const merchantList =  async(req,res) => {
   try {
        const merchants = await Merchant.find()
        const total = merchants.length;
        res.type('json')
        res.set('Content-Range', `merchants 0-5/${total}`);
        res.set('Access-Control-Expose-Headers', 'Content-Range');
        res.set('X-Total-Count',total);
        res.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
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
    if (userAuth && 
    checkRole(["admin"]))
    try {
         const merchant= await Merchant.create({ ...req.body });
         res.status(200).json(merchant);
    } catch(err){
        res.send('Error' + err)
    }  
 }




const updateMerchant = async (req,res)=> {
    try{
        const merchant = await Merchant.updateOne({_id: req.params.id}, { ...req.body})
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
