const express = require('express');
const router = express.Router();
const {getData, addToCart, getCartListData, deleteCartList, deleteAllCartList,upDate } = require ('../crontrolers/controlers')


router.get('/getAll', getData);
router.post("/addcartlist" , addToCart);
router.get('/getCartList', getCartListData);
router.delete('/delete/:id', deleteCartList);
router.delete('/deleteAll', deleteAllCartList);
router.put('/update/:id', upDate)



module.exports=router;







