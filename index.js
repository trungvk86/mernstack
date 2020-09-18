const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://TRUNGVK86:apachecraft@trungvk.th2a7.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>console.log('DB connected'))
.catch(err => console.error(err));

app.get('/',(req,res)=>{
    res.send('Hi em');
});

app.listen(5000);