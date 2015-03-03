var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    username: 'demo',
    password: 'demo'
  },

  initialize: function(){
    // this.on('creating', function(model, attrs, options){
    //   bcrypt.hash(model.get('password'), 8, function(err, hash) {
    //     model.set('password', hash);
    //   });
    // });
  }
});

module.exports = User;
