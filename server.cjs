const express = require('express');
const app = express();

const products = [
  {
    id: 1,
    name: 'punkin pie',
    price: 1.75
  },
  {
    id: 2,
    name: "pasghetti",
    price: .40
  }
]

let idCounter = 3;

app.use(express.json());

// app.use('*', (req, res, next) => {
//   console.log('INSIDE MIDDLEWARE');
//   next();
// });

app.use(express.static('dist'));

// app.get('/', (req, res, next) => {
//   console.log('REQUEST INCOMING')
//   res.sendFile(__dirname + '/dist/index.html');
// });

app.get('/api/v1/products', (req, res, next) => {
  res.send(products)
});

app.post('/api/v1/products', (req, res, next) => {
  const { name, price } = req.body;
  // const name = req.body.name;
  // const price = req.body.price;

  products.push({
    id: idCounter,
    name: name,
    price: Number(price)
  });

  idCounter++;

  res.send(products);
});

app.listen(3000, () => {
  console.log(`Listening on PORT 3000`)
});