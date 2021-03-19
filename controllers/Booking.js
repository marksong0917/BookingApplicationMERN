const Booking = require('../models/Booking')

//retrive all booking
const bookingList =  async(req,res) => {
  try {
       const bookings = await Booking.find()
       const total = bookings.length;
       res.type('json')
       res.set('Content-Range', `bookings 0-5/${total}`);
       res.set('Access-Control-Expose-Headers', 'Content-Range');
       res.set('X-Total-Count',total);
       res.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
       res.json(bookings);
  }catch(err){
      res.send('Error' + err)
  }
}

// Find appointment by ID
const findBooking = async(req,res)=>{
    try{
        const booking = await Booking.findById(req.params.id)
        res.json(booking);
    }catch(err){
        res.send('Error' + err)
    }
}


// Create an appointnent
const createBooking= async(req,res) => {  
    try {
         const booking= await Booking.create({ ...req.body });
         res.status(200).json(booking);
    } catch(err){
        res.send('Error' + err)
    }  
 }

// Update a appointnent
const updateBooking = async (req,res)=> {
    try{
        const booking = await Booking.updateOne({_id: req.params.id}, { ...req.body})
        return res.send("Booking info has been updated successfully")
    
    }catch(err){
        res.send('Error' + err)
    } 
}

// Delete the appoinemnt - still needs testing
const deleteBooking = async (req, res) => {
    try{
        const booking = await Booking.findByIdAndDelete(req.params.id)
        if (!booking) throw Error('No appointments found')
        return res.send('The appointment has been deleted sucessfully')
    }catch(err){
        res.send('Error' + err)
    }
}

module.exports = {
    bookingList,
    findBooking,
    createBooking,
    updateBooking,
    deleteBooking
}
