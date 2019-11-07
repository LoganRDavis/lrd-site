const express = require("express");
const router = express.Router();

router.get('/', (req, res) => { res.sendFile(global.dir + '/views/root/pages/index.html') });

router.get('/sitemap.xml', (req, res) => { res.sendFile(global.dir + "/public/root/sitemap.xml"); });

router.use((req, res, next) => {
	res.status(404);
	res.format({
		html: function () { res.sendFile(global.dir + '/views/root/pages/404.html'); },
		json: function () { res.json({ error: 'Not found' }) },
		default: function () { res.type('txt').send('Not found') }
	})
});

router.use(function (err, req, res, next) {
	console.log(err); res.status(500).send({ error: err });
});

module.exports = router;