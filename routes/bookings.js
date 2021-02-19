const router = require("express").Router();

const {
    bookingList,
    findBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require ("../controllers/Booking")

router.get("/", bookingList);

router.get('/:id',findBooking);

router.post('/', createBooking); 

router.post('/:id', updateBooking); 

router.post('/delete', deleteBooking); 

module.exports = router;