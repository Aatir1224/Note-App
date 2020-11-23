const express = require("express");
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const NOTE = require('./models/Note');
const expressLayouts = require('express-ejs-layouts');
const noteController  = require('./controllers/noteController')

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

app.use('/', noteController);

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server ${err}`)
    }
    console.log(`Server is up and running on port : ${port}`)
})
