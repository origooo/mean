var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, data) {
		if (err) {
			return callback(err);
		}

		var file_arr = [];

		ext = "." + ext;
    data.forEach(function(file){
      if(path.extname(file) === ext){
        file_arr.push(file);
      }
    });

    return callback(null, file_arr);
	});
};