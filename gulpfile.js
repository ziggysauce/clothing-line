const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const gutil = require('gulp-util');
const SequelizeFixtures = require('sequelize-fixtures');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config');
// const WebpackDevServer = require('webpack-dev-server');
// const redis = require('./server/db/redis');

env({
  file: './.env',
  type: 'ini',
});

const db = require('./server/db/models');
// const db = require('./server/db/models');


const models = {
  User: db.User,
};

gulp.task('sync', (cb) => {
  db.User.sync({ force: true })
  // .then(() => redis.set('allTeacherData', 'null'))
  .then(() => { cb(); })
  .catch((err) => { cb(err); });
});

gulp.task('seed:seed', ['sync'], (cb) => {
  SequelizeFixtures.loadFile(models)
    .then(() => {
      cb();
    })
    .catch((err) => {
      cb(err);
    });
});

// gulp.task('seed', ['sync', 'seed:seed']);

gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'server/app.js',
    watch: ['server/'],
    ignore: ['client/**'],
  });
});

gulp.task('dbwatch', () => {
  gulp.watch(['./server/db/models'], ['seed']);
});

// gulp.task('webpack-dev-server', () => {
//   const compiler = webpack(webpackConfig);
//   new WebpackDevServer(compiler, {
//     contentBase: './static',
//     publicPath: '/static',
//     hot: true,
//     inline: true,
//     stats: true,
//     clientLogLevel: 'info',
//     // proxy: {
//     //   '**': {
//     //     target: `http://localhost:${process.env.PORT}`,
//     //     changeOrigin: true,
//     //   },
//     //   '/': {
//     //     target: `http://localhost:${process.env.PORT}`,
//     //     changeOrigin: true,
//     //   },
//     //   '/io/*': {
//     //     target: `http://localhost:${process.env.PORT}`,
//     //     changeOrigin: true,
//     //   },
//     //   '/socket/*': {
//     //     target: `http://localhost:${process.env.PORT}`,
//     //     changeOrigin: true,
//     //   },
//     // },
//     proxy: [
//       {
//         context: ['/api', '/', '/sock'],
//         target: `http://localhost:${process.env.PORT}`,
//         changeOrigin: true,
//       },
//     ],
//   }).listen(8080, 'localhost', (err) => {
//     if (err) {
//       throw new gutil.PluginError('webpack-dev-server ', err);
//     }
//     gutil.log('[webpack-dev-server]', 'WPDS - Listening in on http://localhost:8080');
//   });
// });

// gulp.task('deploy', () => {

// });

gulp.task('default', ['nodemon', 'dbwatch']);
// gulp.task('default', ['nodemon']);
