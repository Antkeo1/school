const db = require('../models')

exports.createMessage = async function(req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    });
    let foundStudentUser = await db.Student.findById(req.params.id)
    let foundTeacherUser = await db.Teacher.findById(req.params.id)
    let foundParentUser = await db.Parent.findById(req.params.id)

  } catch(err) {

  }
}

exports.getMessage = async function(req, res, next) {

}

exports.deleteMessage = async function(req, res, next) {

}
