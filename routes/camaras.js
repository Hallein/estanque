var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.io.emit("hola", "users!!!!!!");
	res.render('camaras', { title: 'Sistema de Control Remoto' });
});

module.exports = router;