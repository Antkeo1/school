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
  },
  parents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent"
  }],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message"
  }]
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
studentSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch(err) {
    return next(err);
  }
}


// a model of a user that the consist of the userSchema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
