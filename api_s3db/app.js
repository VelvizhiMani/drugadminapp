require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
const categoryRoute = require('./routes/Category.route')
const subcategoryRoute = require('./routes/Subcategory.route')
const manufactuerRoute = require('./routes/Manufactuer.route')
const formRoute = require('./routes/Form.route')
const packageRoute = require('./routes/Package.route')
const storageRoute = require('./routes/Storage.route')
const genericRoute = require('./routes/Generic.route')
const productRoute = require('./routes/Product.route')
const orginRoute = require('./routes/Orgin.route')
const referwebRoute = require('./routes/Referweb.route')
const writtenbyRoute = require('./routes/Writtenby.route')
const reviewedbyRoute = require('./routes/Reviewedby.route')
const accountsRoute = require('./routes/Accounts.route')
app.use('/posts',postsRoute);
app.use('/category',categoryRoute);
app.use('/subcategory',subcategoryRoute);
app.use('/manufactuer',manufactuerRoute);
app.use('/form',formRoute);
app.use('/package',packageRoute);
app.use('/storage',storageRoute);
app.use('/generic',genericRoute);
app.use('/product',productRoute);
app.use('/orgin',orginRoute);
app.use('/referweb',referwebRoute);
app.use('/writtenby',writtenbyRoute);
app.use('/reviewedby',reviewedbyRoute);
app.use('/accounts',accountsRoute);

// Connect To DB
mongoose.connect(
process.env.DB_CONNECTION,
{useNewUrlParser:true},
() => console.log('connected to DB!')
);

// How to we start listening to the server
// app.listen(3000);
app.listen(port, ()=> {
    console.log(`Connection is setup at ${port}`)
})

// fetch('http://localhost:3000/posts')
// .then(result => {
//     return result.json();
// })
// .then(data => {
//     console.log(data);
// })