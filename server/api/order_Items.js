const db = require('../db/models');
const router = require('express').Router();

const fetchAllOrderItemData = async (req, res) => {
  try {
    const orderItem_id = (req.params.order_item_id);
    const allData = await db.Order_Items.findOne({
      where: { orderItem_id }
    });
    console.log('Order item loaded: ', allData);
    res.status(200).send(allData);
  } catch (error) {
    console.log('Something went wrong ', error);
    res.status(500).send(error);
  }
};

const fetchOrderItem = async (req, res) => {
  try {
    const orderItem = await db.Order_Items.findOne({ where: { order_item_id: req.params.order_item_id } });
    if (orderItem) {
      console.log('Found order item: ', { order_items: orderItem, order_item_id: req.params.order_item_id });
      res.status(200).send({ orders: order });
    } else {
      res.status(404).send('Credentials incorrect');
    }
  } catch (error) {
    console.log('Error in fetchOrderItem',error);
    res.status(500).send(error);
  }
};

const createOrderItem = async (req, res) => {
  console.log('this is the request: ', req.body);
  console.log('this is the params: ', req.params);

  try {
    console.log('create order item request: ', req.body);
    const orderItems = await db.Order_Items.findOne({ where: { order_item_id: req.params.order_item_id } });
    if (orderItems) {
      console.log('That order item has already been created. Please try creating another.');
      res.status(404).send('That has already been created. Please try creating another order item.');
    } else {
      const newOrderItem = await db.Order_Items.create({
        order_item_id: req.body.order_item_id,
        order_item_quantity: req.body.order_item_quantity,
        order_item_price: req.body.order_item_price,
        order_item_details: req.body.order_item_details,
      });
      console.log('Created new order item: ', { order_items: newOrderItem });
      res.status(201).send({ order_items: newOrderItem });
    }
  } catch (error) {
    console.log('Error in creatingOrderItem', error);
    res.status(500).send(error);
  }
};

const updateOrderItem = async (req, res) => {
  try {
    const OrderItem = await db.Order_Items.findOne({ where: { order_item_id: req.params.order_item_id } });
    if (OrderItem) {
      const updatedOrderItem = await Order_Items.update({
        order_item_quantity: req.body.order_item_quantity,
        order_item_price: req.body.order_item_price,
        order_item_details: req.body.order_item_details,
      });
      if (updatedOrderItem) {
        console.log('Order item successfully updated ', updatedOrderItem);
        res.status(200).send({ order_items: updatedOrderItem });
      } else {
        console.log('Missing a parameter');
        res.status(500).send('Missing a parameter');
      }
    } else {
      console.log('Order item not found');
      res.status(404).send('Order item not found');
    }
  } catch (error) {
    console.log('Error with async in updateOrderItem ', error);
    res.status(500).send(error);
  }
};

const deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await db.Order_Items.findOne({ where: { order_item_id: req.params.order_item_id } });
    if (orderItem) {
      orderItem.destroy({ force: true });
      console.log('Order item deleted');
      res.status(200).send(order);
    } else {
      console.log('Order item not found');
      res.status(404).send('Order item not found');
    }
  } catch (error) {
    console.log('ASYNC Error: ', error);
    res.status(500).send(error);
  }
};

router.get('/', fetchAllOrderItemData);
router.get('/:order_item_id', fetchOrderItem);
router.post('/', createOrderItem);
router.put('/', updateOrderItem);
router.delete('/', deleteOrderItem);

module.exports = router;