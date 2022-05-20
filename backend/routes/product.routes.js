const router = require("express").Router();
const controller = require('../controllers/product.controller')

router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.edit)
router.delete('/:id', controller.deleteOne)

router.put('/:id/stock', controller.updateStock);

module.exports = router;