import express from 'express';
// Assuming these paths are correct, adjust them as necessary
import html from '../1index.html' assert { type: 'text/html' };
import bikebrands from '../2index.html' assert { type: 'text/html' };
// import { bikesproducts } from '../bikesproducts.js'; // Uncomment this when you define bikesproducts correctly

const search = express();
search.use(express.json());


search.get('/', (req, res) => {
    res.json(html);
});

search.get('/brands', (req, res) => {
    res.json(bikebrands);
});

search.get('/brands/products', (req, res) => {
    const nproduct = bikesproducts.map((product) => {
        const { id, name, model, image } = product;
        return { id, name, model, image };
    });
    res.json(nproduct);
});

search.get('/brands/products/:prodNo', (req, res) => {
    const { prodNo } = req.params;
    const singleprod = bikesproducts.find((product) => product.id === Number(prodNo));

    if (!singleprod) {
        return res.status(404).send('nothing');
    }
    res.json(singleprod);
});

search.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
