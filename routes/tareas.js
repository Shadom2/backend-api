let express = require('express');
let tareasController = require('../controllers/tareasControllers')

let router = express.Router();

router.get('/',tareasController.getTareas)

router.post('/', tareasController.addTarea)

router.delete('/:id', tareasController.deleteTarea);

module.exports = router;