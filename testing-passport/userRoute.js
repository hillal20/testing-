const express = require('express');
const router = express.Router();
const User = require('./userModel.js')

router.get('/', (req, res) => {
  User
    .find({})
    .then(p => {
      res.status(200).json({ users: p })
    })
    .catch(err => {
      res.status(500).json({ msg: err })
    })
})





module.exports = router;