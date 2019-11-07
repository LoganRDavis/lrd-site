const express = require("express");
const router = express.Router();

//Change to check how long subdomain is and if short redirect to www
router.use(/.*/, function (req, res, next) {
	if (!req.get('host').match(/^www\..*/i)) {
		return res.redirect('//www.' + req.get('host') + req.url);
	}
	next();
});

router.use((req, res, next) => {
	res.status(404);
	res.format({
		html: function () { res.sendFile(global.dir + '/views/root/pages/404.html'); },
		json: function () { res.json({ error: 'Not found' }) },
		default: function () { res.type('txt').send('Not found') }
	})
});

router.use(function (err, req, res, next) { console.log(err); res.status(500).send({ error: err }); });

module.exports = router;