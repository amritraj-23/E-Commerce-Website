const mongoose = require('mongoose');


const productSchenma = new mongoose.Schema({
    name: {
        type:String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    img: {
        type:String,
        trim:true,
        default: '/images/product.jpg'
    },
    desc: {
        type: String,
        trim: true

    }

});


// model is Wraaper of Schema
// collection creation

const Product = mongoose.model('Product',productSchenma)


module.exports = Product;