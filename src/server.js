const express = require('express');
const app = express();
const port = 5000;

const returnErrors = false;
const defaultRoute = '/home';

app.use(express.static('web'));

app.get('/home', (request, response) => {
    response.render('pages/home.twig', {
        nav: {
            active: 'home',
        },
    });
});

app.get('/products', (request, response) => {
    response.render('pages/products.twig', {
        nav: {
            active: 'products',
        },
    });
});

app.get('*', (request, response) => {
    if (returnErrors) {
        return response
            .status(404)
            .body('Not found.');
    }

    response.redirect(defaultRoute || '/');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    let date = new Date();
    console.log('['+ (date.getHours().toString().length === 1 ? '0' : '') + date.getHours() +':'+ (date.getMinutes().toString().length === 1 ? '0' : '') + date.getMinutes() +'] Listening on localhost:' + port);
});
