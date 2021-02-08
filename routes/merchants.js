const router = require("express").Router();
const { userAuth, checkRole } = require("../controllers/Auth");

const {
    merchantList,
    findMerchant,
    createMerchant,
    updateMerchant,
    deleteMerchant
} = require("../controllers/Merchant")

router.get("/", async (req, res) => {
    await merchantList(req.body, res);
  });

router.get('/:id',async (req, res) => {
    await findMerchant(req.body, res);
  });

router.post('/',userAuth,
checkRole(["admin"]), async (req, res) => {
    await createMerchant(req.body, res);
  }); 
  
router.post('/update',userAuth,
checkRole(["merchant", "admin"]), async (req, res) => {
      await updateMerchant(req.body, res);
    }); 

router.post('/delete',userAuth,
checkRole(["admin"]), async (req, res) => {
    await deleteMerchant(req.body, res);
}); 

module.exports = router;