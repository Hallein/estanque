var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var data = {
					title: 'Sistema de Control Remoto',
					humedad: [
								{id: 'A', porcentaje: 86, estado: 1, data: [78, 82, 96, 70, 72, 49, 35, 57, 60, 55, 67, 77]},
								{id: 'B', porcentaje: 61, estado: 2, data: [12, 21, 34, 21, 82, 21, 10, 21, 78, 21, 99, 21]},
								{id: 'C', porcentaje: 33, estado: 3, data: [10, 20, 30, 40, 50, 60, 90, 20, 10, 50, 40, 80]},
								{id: 'D', porcentaje: 15, estado: 4, data: [90, 10, 80, 20, 70, 30, 60, 40, 50, 55, 65, 10]},
					]
				};
	res.render('humedad', data);
});

router.post('/sensor/:id', function(req, res, next) {

	console.log(req.body);

	var data = {
		id: req.params.id,
		humedad: req.body.humedad,
		hora: req.body.hora
	};

	res.io.emit("humedad", data);
	res.json(data);
});


module.exports = router;
