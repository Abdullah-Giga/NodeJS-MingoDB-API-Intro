const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routers/bloRoutes')

//Initializing express app
const app = express();


// to suppress the mongoose deprication warning
mongoose.set('strictQuery', true);

// Register view engine
app.set('view engine', 'ejs');


// Server connection port and mondoDB connection string
const port = 5000;
const uri = 'mongodb+srv://Admin:Admin123@cluster0.wdrmawy.mongodb.net/?retryWrites=true&w=majority';

// connecting mongoDB and starting server
mongoose.connect(uri)
.then(app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
    console.log('Connected to database');
})).catch((err) => console.log(err));

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/blogs',blogRoutes);


// 404 Page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'});
})


