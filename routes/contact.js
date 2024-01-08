

const express = require('express');

const productsController = require('../controllers/contactus');

const router = express.Router();

router.get('/contactus' ,productsController.contactuscontroller);

router.post('/contactus',productsController.postcontroller);

module.exports = router;