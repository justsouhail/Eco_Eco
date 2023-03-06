const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/product');
const seedRouter = require('./routes/seedRoutes.js');
const productRouter = require('./routes/productroutes');
const Usermodel = require('./models/user');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecom', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.use('/api/seed', seedRouter);
  app.use('/api/products', productRouter);

app.post("/adduser", async (req, res) => {
  const nom = req.body.nom;
  const email = req.body.email;
  const password =  req.body.password;
  const role = req.body.role;
  const userinstance = new Usermodel({ nom: nom,
                               email : email,
                               password : password,
                              role : role });
  console.log(userinstance.nom);
  await userinstance.save();
  res.send('data insert')
});

app.post("/loguser" ,async (req, res) => {
  const { email, password } = req.body;
  console.log( password);
  const user = await Usermodel.findOne({ email, password });
  if (user) {
    res.send({ message: 'Login successful', user });
    console.log('succes')
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

app.listen(3001, () => {
  console.log('connected');
});
