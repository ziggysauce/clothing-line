const db = require('../db/models');
const router = require('express').Router();

const fetchAllOrderData = async (req, res) => {
  try {
    const order_id = (req.params.order_id);
    const allData = await db.Orders.findOne({
      where: { order_id }
    });
    console.log('Order loaded: ', allData);
    res.status(200).send(allData);
  } catch (error) {
    console.log('Something went wrong ', error);
    res.status(500).send(error);
  }
};

const fetchOrder = async (req, res) => {
  try {
    const order = await db.Orders.findOne({ where: { order_id: req.params.order_id } });
    if (order) {
      console.log('Found order: ', { orders: order, order_id: req.params.order_id });
      res.status(200).send({ orders: order });
    } else {
      res.status(404).send('Credentials incorrect');
    }
  } catch (error) {
    console.log('Error in fetchOrder',error);
    res.status(500).send(error);
  }
};

const createOrder = async (req, res) => {
  console.log('this is the request: ', req.body);
  console.log('this is the params: ', req.params);

  try {
    console.log('create order request: ', req.body);
    const orderItem = await db.Orders.findOne({ where: { order_id: req.params.order_id } });
    if (orderItem) {
      console.log('That order has already been created. Please try creating another.');
      res.status(404).send('That has already been created. Please try creating another order.');
    } else {
      const newOrder = await db.Orders.create({
        order_id: req.body.order_id,
        order_details: req.body.order_details,
        order_date_ordered: req.body.order_date_ordered,
      });
      console.log('Created new order: ', { orders: newOrder });
      res.status(201).send({ orders: newOrder });
    }
  } catch (error) {
    console.log('Error in creatingOrder', error);
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const Order = await db.Orders.findOne({ where: { order_id: req.params.order_id } });
    if (Order) {
      const updatedOrder = await Orders.update({
        order_details: req.body.order_details,
        order_date_ordered: req.body.order_date_ordered,
      });
      if (updatedOrder) {
        console.log('Order successfully updated ', updatedOrder);
        res.status(200).send({ orders: updatedOrder });
      } else {
        console.log('Missing a parameter');
        res.status(500).send('Missing a parameter');
      }
    } else {
      console.log('Order not found');
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.log('Error with async in updateOrder ', error);
    res.status(500).send(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await db.Orders.findOne({ where: { order_id: req.params.order_id } });
    if (order) {
      order.destroy({ force: true });
      console.log('Order deleted');
      res.status(200).send(order);
    } else {
      console.log('Order not found');
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.log('ASYNC Error: ', error);
    res.status(500).send(error);
  }
};

router.get('/', fetchAllOrderData);
router.get('/:order_id', fetchOrder);
router.post('/', createOrder);
router.put('/', updateOrder);
router.delete('/', deleteOrder);

module.exports = router;