const mongoose = require('mongoose');

const SubscriptionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('subscription', SubscriptionSchema);