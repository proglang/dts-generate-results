var types = require('./action-types')
var {actionCreator, optionsActionCreator} = require('redux-action-utils')

module.exports = {
  addLesson: actionCreator(types.ADD_LESSON),
  importLessons: actionCreator(types.IMPORT_LESSONS, 'lessons'),
  updateLesson: optionsActionCreator(types.UPDATE_LESSON, 'id', 'update')
}
