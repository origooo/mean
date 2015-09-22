var worker = require("./06-2-MakeItModular");

worker(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		return console.error(err);
	}
	data.forEach(function(file) {
		console.log(file);
	});
});