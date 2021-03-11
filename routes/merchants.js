const router = require("express").Router();
const { userAuth, checkRole } = require("../controllers/Auth");

const {
    merchantList,
    findMerchant,
    createMerchant,
    updateMerchant,
    deleteMerchant
} = require("../controllers/Merchant")

router.get("/",  merchantList);

router.get('/:id',findMerchant);

router.post('/', createMerchant); 

router.post('/:id', updateMerchant); 

router.post('/delete', deleteMerchant); 
// router.post('/create-merchant', createMerchant); 
  
// router.post('/:id',userAuth,
// checkRole(["merchant", "admin"]), async (req, res) => {
//       await updateMerchant(req.body, res);
//     }); 


// router.post('/delete',userAuth,
// checkRole(["admin"]), async (req, res) => {
//     await deleteMerchant(req.body, res);
// }); 

router.post('/delete', deleteMerchant); 

module.exports = router;