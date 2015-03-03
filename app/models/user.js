var db = require('../config');

var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    username: 'demo',
    password: 'demo'
  },

  initialize: function(){
    this.on('creating', function(model, attrs, options) {
      return bcrypt.hashAsync(model.get('password'), null, function(err, hash) {
        return model.set('password', hash);
      });
    });
  }
});

module.exports = User;
