const express = require('express');
const morgan = require('morgan');
require('dotenv').config;

const home = require('./routes/home');
const products = require('./routes/products');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan('tiny'));

app.use('/', home);
app.use('/products', products);
// app.use('/users', users);
// app.use('/orders', orders);
// app.use('/contact', contact);

app.listen(port, (err) => 
{
    if(err)
        console.log(err);
    else
        console.log('app run in port ', port);

});
