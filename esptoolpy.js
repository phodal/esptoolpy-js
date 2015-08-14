var spawn = require('child_process').spawn;


function read_mac (port, cb){
  var result = '';
  var command = spawn('python', ['lib/esptool.py', '-p', port, 'read_mac']);

  command.stdout.on('data', function (data) {
    'use strict';
    //console.log('stdout: ' + data);
    cb(data);
  });

  command.stderr.on('data', function (data) {
    'use strict';
    //console.log('stderr: ' + data);
    cb(data);
  });
}

module.exports = {
  read_mac :read_mac
};
