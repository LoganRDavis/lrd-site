'use strict';
const express = require('express');
const helmet = require('helmet')
const favicon = require('serve-favicon')
const subdomain = require('express-subdomain');

global.dir = require('path').dirname(require.main.filename);
const server = express();

function redirectSecure(req, res, next) {
	if (!req.secure) {
		return res.redirect(301, ('https://' + req.get('host') + req.url));
	}
	next();
}

if (process.env.NODE_ENV !== "development") {
	server.use(helmet());
	server.use(redirectSecure);
}

server.enable('trust proxy');
server.use(express.static(__dirname + '/public'));
//server.use(favicon(global.dir + '/public/images/logo/favicon.ico'));
server.use(subdomain('www', require(__dirname + '/routers/www')));
server.use('/', require(__dirname + '/routers/root'));

if (module === require.main) {
	const lrdServer = server.listen(process.env.PORT || 80, () => {
		const port = lrdServer.address().port;
		console.log(`Server listening on port ${port}`);
	});
}

module.exports = server;