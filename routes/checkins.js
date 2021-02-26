const router = require("express").Router();

const {
    checkinList,
    findCheckIn,
    createCheckIn,
    updateCheckIn,
    deleteCheckIn
} = require ("../controllers/CheckIn")

router.get("/", checkinList);

router.get('/:id',findCheckIn);

router.post('/', createCheckIn); 

router.post('/:id', updateCheckIn); 

router.post('/delete', deleteCheckIn); 

module.exports = router;