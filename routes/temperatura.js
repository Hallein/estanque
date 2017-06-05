var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('temperatura', { title: 'Sistema de Control Remoto' });
});

router.post('/sensor/:id', function(req, res, next) {
	
	var data = {
		id: req.params.id,
		temperatura: req.body.temperatura,
		hora: req.body.hora
	};

	res.io.emit("temperatura", data);
	res.json(data);
});

module.exports = router;
