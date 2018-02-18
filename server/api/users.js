const db = require('../db/models');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Promise = require('bluebird');
const util = require('./utils');

const saltRounds = 10;

const fetchAllUserData = async (req, res) => {
  try {
    const email = util.antiHasher(req.params.auth_token);
    const allData = await db.User.findOne({
      where: {
        email,
        userType: 1,
      }
    });
    // console.log('All information front loaded ', allData);
    res.status(200).send(allData);
  } catch (error) {
    console.log('Something went wrong ', error);
    res.status(500).send(error);
  }
};

const fetchUser = async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { email: req.params.email, userType: 1 } });
    const data = await bcrypt.compare(req.params.creds, user.password);
    if (data) {
      console.log('User Logged In: ', { user: user, id_token: util.hasher(`${req.params.email}`) });
      res.status(200).send({ user: user, id_token: util.hasher(req.params.email) });
    } else {
      res.status(404).send('Credentials incorrect');
    }
  } catch (error) {
    console.log('Error in fetchUser',error);
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  console.log("this is the request", req.body);
  console.log("this is the params!", req.params);

  try {
    console.log("this is the request!!!!", req.body);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);
    const person = await db.User.findOne({ where: { email: req.body.email } });
    if (person) {
      console.log('That email is taken. Please try another email.');
      res.status(404).send('That email is taken. Please try another email.');
    } else {
      const newUser = await db.User.create({
        email: req.body.email.toLowerCase(),
        password: hash,
        userType: 1,
        fName: req.body.fName,
        lName: req.body.lName,
        username: req.body.username,
        image: req.body.image,
      });
      console.log('Signed Up New User: ', { user: newUser, id_token: util.hasher(req.body.email) });
      res.status(201).send({ user: newUser, id_token: util.hasher(req.body.email) });
    }
  } catch (error) {
    console.log('Error in creatingUser', error);
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(util.antiHasher(req.params.auth_token));
    const User = await db.User.findOne({ where: { email: util.antiHasher(req.params.auth_token) } });
    if (User) {
      const updatedUser = await User.update({
        fName: req.body.fName,
        lName: req.body.lName,
        username: req.body.username,
      });
      if (updatedUser) {
        console.log('User successfully updated ', updatedUser);
        res.status(200).send({ user: updatedStudent, auth_token: util.hasher(updatedStudent.email) });
      } else {
        console.log('Missing a parameter');
        res.status(500).send('Missing a parameter');
      }
    } else {
      console.log('User not found');
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.log('Error with async in updateUser ', error);
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { email: util.antiHasher(req.params.auth_token) } });
    if (user) {
      user.destroy({ force: true });
      console.log('Student deleted');
      res.status(200).send(user);
    } else {
      console.log('User not found');
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.log('ASYNC Error: ', error);
    res.status(500).send(error);
  }
};


router.get('/:auth_token', fetchAllUserData);
router.get('/:email/:creds', fetchUser);
router.post('/', createUser);
router.put('/:auth_token', updateUser);
router.delete('/:auth_token', deleteUser);

module.exports = router;