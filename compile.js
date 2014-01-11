var config = require('./config').Config
	, Buffer = require('buffer').Buffer
	, ECT = require('ect')
	, fs = require('fs');

var lang = require('./src/lang/' + config.lang).Lang;

var ectRenderer = ECT({ root: './src/templates/' });

var gData = {
	lang: config.lang,
	descrHeader: lang.descrHeader,
	encodedBg: (new Buffer(fs.readFileSync('./src/images/gears.png')).toString('base64'))
};

fs.mkdir('./output', function () {
	for (var i in lang.codes) {
		var info = lang.codes[i];

		var data = gData;

		data.codeStr = lang.codeStr.replace('#', info.code);
		data.message = info.message;
		data.list = info.list;
		data.text = info.text;

		var fName = info.code + '.html';
		fs.writeFile('./output/' + fName, ectRenderer.render('layout.ect', data), function () {
			console.log(fName + ' is successfully compiled');
		}.apply(fName));
	}
})