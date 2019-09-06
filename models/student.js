const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true

  },
  username:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  }
})

// wait for pw to hash and set it to hashedPassword variable and save it
studentSchema.pre('save', async function(next) {
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
studentSchema.method.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch(err) {
    return next(err);
  }
}


// a model of a user that the consist of the userSchema
const Student = mongoose.model('Student', studentSchema);

module.export = Student;
