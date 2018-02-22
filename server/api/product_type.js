const db = require('../db/models');
const router = require('express').Router();

const fetchAllProductTypeData = async (req, res) => {
  try {
    const productType_code = (req.params.product_type_code);
    const allData = await db.Product_Type.findOne({
      where: { productType_code }
    });
    console.log('Product type loaded: ', allData);
    res.status(200).send(allData);
  } catch (error) {
    console.log('Something went wrong ', error);
    res.status(500).send(error);
  }
};
//i changed line 24 to send back the full data of the item, and i commented out the first get route 
// that used the fetchAllOrderItemData function.
const fetchProductType = async (req, res) => {
  try {
    const productType = await db.Product_Type.findOne({ where: { product_type_code: req.params.product_type_code } });
    if (productType) {
      console.log('Found product type: ', { product_type: productType, product_type_code: req.params.product_type_code });
      res.status(200).send(productType);
    } else {
      res.status(404).send('Credentials incorrect');
    }
  } catch (error) {
    console.log('Error in fetchProductType',error);
    res.status(500).send(error);
  }
};

const createProductType = async (req, res) => {
  console.log('this is the request: ', req.body);
  console.log('this is the params: ', req.params);

  try {
    console.log('create product type request: ', req.body);
    const ProductTypes = await db.Product_Type.findOne({ where: { product_type_code: req.params.product_type_code } });
    if (ProductTypes) {
      console.log('That product type has already been created. Please try creating another.');
      res.status(404).send('That has already been created. Please try creating another product type.');
    } else {
      const newProductType = await db.Product_Type.create({
        product_type_code: req.body.product_type_code,
        product_type_description: req.body.product_type_description,
        product_images: req.body.product_images,
      });
      console.log('Created new product type: ', { order_items: newProductType });
      res.status(201).send({ order_items: newProductType });
    }
  } catch (error) {
    console.log('Error in creatingProductType', error);
    res.status(500).send(error);
  }
};

const updateProductType = async (req, res) => {
  try {
    const ProductType = await db.Product_Type.findOne({ where: { product_type_code: req.params.product_type_code } });
    if (ProductType) {
      const updatedProductType = await Product_Type.update({
        product_type_description: req.body.product_type_description,
        product_images: req.body.product_images,
      });
      if (updatedProductType) {
        console.log('Product type successfully updated ', updatedProductType);
        res.status(200).send({ product_type: updatedProductType });
      } else {
        console.log('Missing a parameter');
        res.status(500).send('Missing a parameter');
      }
    } else {
      console.log('Product type not found');
      res.status(404).send('Product type not found');
    }
  } catch (error) {
    console.log('Error with async in updateProductType ', error);
    res.status(500).send(error);
  }
};

const deleteProductType = async (req, res) => {
  try {
    const productType = await db.OProduct_Type.findOne({ where: { product_type_code: req.params.product_type_code } });
    if (productType) {
      productType.destroy({ force: true });
      console.log('Product type deleted');
      res.status(200).send(order);
    } else {
      console.log('Product type not found');
      res.status(404).send('Product type not found');
    }
  } catch (error) {
    console.log('ASYNC Error: ', error);
    res.status(500).send(error);
  }
};

router.get('/:product_type_code', fetchProductType);
router.post('/', createProductType);
router.put('/', updateProductType);
router.delete('/', deleteProductType);

module.exports = router;