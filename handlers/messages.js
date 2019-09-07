const db = require('../models')

exports.createMessage = async function(req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    });
    // let foundUser = await db.Users.findById(req.params.id)
    let foundStudentUser = await db.Student.findById(req.params.id)
    let foundTeacherUser = await db.Teacher.findById(req.params.id)
    let foundParentUser = await db.Parent.findById(req.params.id)

    // foundUser.messages.push(messages.id);
    foundParentUser.messages.push(messages.id);
    foundTeacherUser.messages.push(messages.id);
    foundStudentUser.messages.push(messages.id);

    // await foundUser.save();
    await foundParentUser.save();
    await foundTeacherUser.save();
    await foundStudentUser.save();

    let foundMessage = db.Message.findById(message._id).populate('user', {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundMessage);
  } catch(err) {
    return next(err)
  }
}

//GET METHOD
exports.getMessage = async function(req, res, next) {
  try {
    let message = await db.Message.find(req.params.message_id)
    return res.status(200).json(message)
  } catch(err) {
    return next(err)
  }
}

// DELETE METHOD
exports.deleteMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id)
    await foundMessage.remove()
    return res.status(200).json(foundMessage)
  } catch(err) {
    return next(err)
  }
}
