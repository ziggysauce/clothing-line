const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/order_items', require('./order_items'));
router.use('/product_type', require('./product_type'));

module.exports = router;
