const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');
const port = 2323;

// For DataBase Connetion

mongoose.connect('mongodb://localhost:27017/Shopping-Cart')
.then((result) => {
    console.log("DB CONEECTED");
}).catch((err) => {
    console.log("FAIL TO CONNECT");
});


// seedDB();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})