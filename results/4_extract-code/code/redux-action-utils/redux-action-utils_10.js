var types = require('./action-types')

function addLesson() {
  return {
    type: types.ADD_LESSON
  }
}

function importLessons(lessons) {
  return {
    type: types.IMPORT_LESSONS,
    lessons
  }
}

function updateLesson(options) {
  return {
    type: types.SELECT_LESSON,
    id: options.id,
    update: options.update
  }
}

module.exports = {addLesson, importLessons, updateLesson}
