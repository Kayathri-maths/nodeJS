const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user')

const app= express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// const contactRoutes = require('./routes/contact');
// const successRoutes =require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    User.findById('6639be95ce50197a5c63a489')
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    })
})

app.use('/admin',adminRoutes);
app.use(shopRoutes);
// app.use(contactRoutes);
// app.use(successRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//     app.listen(3000);
// });

mongoose.connect('mongodb+srv://kayathri:Njs8vSgQfSp933j5@cluster0.crjgy7j.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
  .then( result => {
    User.findOne().then(user => {
      if(!user){
        const user = new User({
          name: 'kayathri',
          email: 'kayathri@gmail.com',
          cart: {
            items: []
          }
        })
        user.save();
      }
    })
    app.listen(3000);
    console.log('connected!');
  })
  .catch(err => {
    console.log(err);
  })