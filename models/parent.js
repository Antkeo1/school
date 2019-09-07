const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const parentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true

  },
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  },
  child: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message"
  }]
})

// wait for pw to hash and set it to hashedPassword variable and save it
parentSchema.pre('save', async function(next) {
  try {
    if(!this.isModified('password')) {
      return next
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  } catch(err) {
    return next(err);
  }
});

// to compare hashedPassword to the candidatePassword
parentSchema.method.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch(err) {
    return next(err);
  }
}


// a model of a user that the consist of the userSchema
const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
