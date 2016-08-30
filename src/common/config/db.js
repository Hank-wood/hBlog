'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '8889',
      database: 'blog',
      user: 'root',
      password: 'root',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};


// export default {
//   type: 'mysql',
//   adapter: {
//     mysql: {
//       host: 'localhost',
//       port: '3306',
//       database: 'blog',
//       user: 'root',
//       password: 'Zz61629631z',
//       prefix: '',
//       encoding: 'utf8'
//     },
//     mongo: {

//     }
//   }
// };