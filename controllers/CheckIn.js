const CheckIn = require('../models/CheckIn')

//retrive all Checked in items
const checkinList =  async(req,res) => {
  try {
       const checkins = await CheckIn.find()
       const total = checkins.length;
       res.type('json')
       res.set('Content-Range', `checkins 0-5/${total}`);
       res.set('Access-Control-Expose-Headers', 'Content-Range');
       res.set('X-Total-Count',total);
       res.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
       res.json(checkins);
  }catch(err){
      res.send('Error' + err)
  }
}

// Find check in app by ID
const findCheckIn = async(req,res)=>{
    try{
        const checkin = await CheckIn.findById(req.params.id)
        res.json(checkin);
    }catch(err){
        res.send('Error' + err)
    }
}


// create check in item
const createCheckIn= async(req,res) => {  
    try {
         const checkin= await CheckIn.create({ ...req.body });
         res.status(200).json(checkin);
    } catch(err){
        res.send('Error' + err)
    }  
 }

// Update a check in
const updateCheckIn = async (req,res)=> {
    try{
        const checkin = await CheckIn.updateOne({_id: req.params.id}, { ...req.body})
        return res.send("Check-in info has been updated successfully")
    }catch(err){
        res.send('Error' + err)
    } 
}

// Delete the check in item - still needs testing
const deleteCheckIn = async (req, res) => {
    try{
        const checkin = await CheckIn.findByIdAndDelete(req.params.id)
        if (!checkin) throw Error('No check-ins found')
        return res.send('The check-in has been deleted sucessfully')
    }catch(err){
        res.send('Error' + err)
    }
}

module.exports = {
    checkinList,
    findCheckIn,
    createCheckIn,
    updateCheckIn,
    deleteCheckIn
}
