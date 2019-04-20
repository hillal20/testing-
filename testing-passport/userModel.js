const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const definition = {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}
const options = {
  timestamps: true
}
const userSchema = new Schema(definition, options);
userSchema.pre('save', (next) => {
  bcrypt
    .hash(this.password, 11)
    .then(hash => {
      this.password = hash;
      next()
    })
    .catch(err => {
      next(err)
    })
})

userSchema.methods.checkingPassword = function (guestPassword) {
  return bcrypt.compare(this.password, guestPassword);
}
const userModel = mongoose.model('User', userSchema, 'users');
module.exports = userModel;



