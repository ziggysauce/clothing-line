const Sequelize = require('sequelize');
const db = require('../config/database');

// Table Definitions

const User = db.define('user', {
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userType: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  username: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});











// Relation Definitions
// School.hasMany(User, { foreignKey: { name: 'school_id', allowNull: true }, onDelete: 'CASCADE' });
// User.belongsTo(School, { foreignKey: { name: 'school_id', allowNull: true }, onDelete: 'CASCADE' });

// School.hasMany(Cohort, { foreignKey: { name: 'school_id', allowNull: true }, onDelete: 'CASCADE' });
// Cohort.belongsTo(School, { foreignKey: { name: 'school_id', allowNull: true }, onDelete: 'CASCADE' });

// User.hasMany(Cohort, { as: 'cohort', foreignKey: { name: 'teacher_id', allowNull: false }, onDelete: 'CASCADE' });
// Cohort.belongsTo(User, { as: 'teacher', foreignKey: { name: 'teacher_id', allowNull: false }, onDelete: 'CASCADE' });

// Cohort.hasMany(Lecture, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });
// Lecture.belongsTo(Cohort, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });

// User.hasMany(Attendance, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// Attendance.belongsTo(User, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });

// User.hasMany(StudentQuestion, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// StudentQuestion.belongsTo(User, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });

// Lecture.hasMany(Attendance, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });

// Attendance.belongsTo(Lecture, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });

// Lecture.hasMany(Topic, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });
// Topic.belongsTo(Lecture, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });

// Topic.hasMany(Quiz, { foreignKey: { name: 'topic_id', allowNull: false }, onDelete: 'CASCADE' });
// Quiz.belongsTo(Topic, { foreignKey: { name: 'topic_id', allowNull: false }, onDelete: 'CASCADE' });

// Topic.hasMany(StudentQuestion, { foreignKey: { name: 'topic_id', allowNull: false }, onDelete: 'CASCADE' });
// StudentQuestion.belongsTo(Topic, { foreignKey: { name: 'topic_id', allowNull: false }, onDelete: 'CASCADE' });

// Quiz.hasMany(Question, { foreignKey: { name: 'quiz_id', allowNull: false }, onDelete: 'CASCADE' });
// Question.belongsTo(Quiz, { foreignKey: { name: 'quiz_id', allowNull: false }, onDelete: 'CASCADE' });

// Question.hasMany(Answer, { foreignKey: { name: 'question_id', allowNull: false }, onDelete: 'CASCADE' });
// Answer.belongsTo(Question, { foreignKey: { name: 'question_id', allowNull: false }, onDelete: 'CASCADE' });

// User.hasMany(Answer, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// Answer.belongsTo(User, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });

// User.hasMany(StudentCohort, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// StudentCohort.belongsTo(User, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// Cohort.hasMany(StudentCohort, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });
// StudentCohort.belongsTo(Cohort, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });

// User.hasMany(Result, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// Result.belongsTo(User, { foreignKey: { name: 'student_id', allowNull: false }, onDelete: 'CASCADE' });
// Quiz.hasMany(Result, { foreignKey: { name: 'quiz_id', allowNull: false }, onDelete: 'CASCADE' });
// Result.belongsTo(Quiz, { foreignKey: { name: 'quiz_id', allowNull: false }, onDelete: 'CASCADE' });
// Cohort.hasMany(Result, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });
// Result.belongsTo(Cohort, { foreignKey: { name: 'cohort_id', allowNull: false }, onDelete: 'CASCADE' });
// Lecture.hasMany(Result, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });
// Result.belongsTo(Lecture, { foreignKey: { name: 'lecture_id', allowNull: false }, onDelete: 'CASCADE' });

//add this to the db
// School.sync({ force: true })
//   .then(() => User.sync({ force: true }))
//   .then(() => Cohort.sync({ force: true }))
//   .then(() => StudentCohort.sync({ force: true }))
//   .then(() => Lecture.sync({ force: true }))
//   .then(() => Attendance.sync({ force: true }))
//   .then(() => Topic.sync({ force: true }))
//   .then(() => StudentQuestion.sync({ force: true }))
//   .then(() => Quiz.sync({ force: true }))
//   .then(() => Question.sync({ force: true }))
//   .then(() => Answer.sync({ force: true }))
//   .then(() => Result.sync({ force: true }))
//   .catch((err) => { console.log(err); });

module.exports = {
  User
};
