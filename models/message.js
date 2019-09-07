const mongoose = require('mongoose');
const studentUser = require('./student')

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "Users"
  },
  Users: {
    type: String,
    required: true,
    enum: ['Student', 'Teacher', 'Parent']
  }
});

messageSchema.pre('remove', async function(next) {
  try {
    // let user = await Users.findById(this.user)
    let studentUser = await Student.findById(this.studentUser);
    let teacherUser = await Teacher.findById(this.teacherUser);
    let parentUser = await Parent.findById(this.parentUser);

    // user.messages.remove(this.id);
    studentUser.messages.remove(this.id);
    teacherUser.messages.remove(this.id);
    parentUser.messages.remove(this.id);

    // await user.save();
    await studentUser.save();
    await teacherUser.save();
    await parentUser.savve();

    return next();
  } catch(err) {
    return next(err)
  }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
