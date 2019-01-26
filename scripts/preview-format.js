var cpx = require('cpx');
var ejs = require('ejs');
var exec = require('child-process-promise').exec;
var fs = require('fs');
var mkdirp = require('mkdirp');
var pkg = require('../package.json');
var twine = require('twine-utils');

var encoding = { encoding: 'utf8' };

Promise.all([
	exec('browserify src/index.js', { maxBuffer: Infinity })
]).then(function(results) {
	var distPath = 'preview';
	var htmlTemplate = ejs.compile(fs.readFileSync('src/index.ejs', encoding));


	mkdirp.sync(distPath);
	fs.writeFileSync(
		distPath + '/default.html',
		htmlTemplate({
			style: fs.readFileSync('src/basic.css'),
			script: results[0].stdout
		}).replace("{{STORY_DATA}}",fs.readFileSync('src/story.txt'))
		.replace("{{STORY_NAME}}","This is the title")
	);


});