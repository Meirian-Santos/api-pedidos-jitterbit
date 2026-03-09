const express = require('express');

const router = express.Router();

const orderController = require('../controllers/orderController');


router.post('/', orderController.createOrder);

router.get('/', orderController.listOrders);

router.get('/:numeroPedido', orderController.getOrder);

router.put('/:numeroPedido', orderController.updateOrder);

router.delete('/:numeroPedido', orderController.deleteOrder);


module.exports = router;