const express = require('express');
const server = express();
const mongoose = require('mongoose');
server.use(express.json());



mongoose
  .connect('mongodb://localhost:27017/passportTestingDb')
  .then(p => { console.log('\n== passportTestingDb is running==\n') })
  .catch(err => { console.log(err) });

server.get('/', (req, res) => {
  res.status(200).json({ msg: ' api is running!' })
})

const userRoute = require('./userRoute.js');
server.use('/users', userRoute)




server.listen(6000, () => {
  console.log('\n ==== server is running on port 6000===\n')
})
