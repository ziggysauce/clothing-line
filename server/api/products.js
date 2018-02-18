const db = require('../db/models');
const router = require('express').Router();

const fetchAllProductData = async (req, res) => {
  try {
    const product_id = (req.params.product_id);
    const allData = await db.Product.findOne({
      where: { product_id }
    });
    console.log('Products loaded: ', allData);
    res.status(200).send(allData);
  } catch (error) {
    console.log('Something went wrong ', error);
    res.status(500).send(error);
  }
};

const fetchProduct = async (req, res) => {
  try {
    const product = await db.Product.findOne({ where: { product_id: req.params.product_id } });
    if (product) {
      console.log('Found product: ', { product: product, product_id: req.params.product_id });
      res.status(200).send({ user: user, id_token: util.hasher(req.params.email) });
    } else {
      res.status(404).send('Credentials incorrect');
    }
  } catch (error) {
    console.log('Error in fetchProduct',error);
    res.status(500).send(error);
  }
};

const createProduct = async (req, res) => {
  console.log('this is the request: ', req.body);
  console.log('this is the params: ', req.params);

  try {
    console.log('create product request: ', req.body);
    const item = await db.Product.findOne({ where: { product_id: req.params.product_id } });
    if (item) {
      console.log('That product has already been created. Please try creating another.');
      res.status(404).send('That has already been created. Please try creating another product.');
    } else {
      const newProduct = await db.Product.create({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_color: req.body.product_color,
        product_size: req.body.product_size,
        product_description: req.body.product_description,
      });
      console.log('Created new product: ', { product: newProduct });
      res.status(201).send({ product: newProduct });
    }
  } catch (error) {
    console.log('Error in creatingProduct', error);
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const Product = await db.ProductUser.findOne({ where: { product_id: req.params.product_id } });
    if (Product) {
      const updatedProduct = await Product.update({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_color: req.body.product_color,
        product_size: req.body.product_size,
        product_description: req.body.productdescriptione,
      });
      if (updatedProduct) {
        console.log('Product successfully updated ', updatedProduct);
        res.status(200).send({ product: updatedProduct });
      } else {
        console.log('Missing a parameter');
        res.status(500).send('Missing a parameter');
      }
    } else {
      console.log('Product not found');
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.log('Error with async in updateProduct ', error);
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await db.Product.findOne({ where: { product_id: req.params.product_id } });
    if (product) {
      product.destroy({ force: true });
      console.log('Product deleted');
      res.status(200).send(user);
    } else {
      console.log('Product not found');
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.log('ASYNC Error: ', error);
    res.status(500).send(error);
  }
};

router.get('/', fetchAllProductData);
router.get('/:product_id', fetchProduct);
router.post('/', createProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;