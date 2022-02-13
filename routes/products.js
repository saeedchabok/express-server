const express = require('express');

const router = express.Router();

const products =
[
    {
        id: 1,
        code:12345,
        productsName: 'Reis'
    }
];

router.route('/')
    .get((req, res) => {res.status(200).send(products); });
module.exports = router;
