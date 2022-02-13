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
    .get((req, res) => {res.status(200).send(products); })
    .post((req, res) => 
    {
        const product = 
        {
            id: products[ products.length -1 ].id + 1,
            code: req.body.code,
            productsName: req.body.productsName
        };
        products.push(product);
        res.status(200).send(product); 
    });
module.exports = router;
