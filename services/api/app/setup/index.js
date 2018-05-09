const mongoose = require('mongoose'),
      UserModel = require('@projectModels/user')

const models = {
  User: mongoose.model('User')
}

module.exports = models;
