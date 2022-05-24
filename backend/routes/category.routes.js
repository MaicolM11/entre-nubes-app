const router = require("express").Router();
const controller = require('../controllers/category.controller')

router.get('/', controller.getAll);
router.post('/', controller.createCategory);
router.put('/:name', controller.editCategory)
router.delete('/:name', controller.deleteCategory)

module.exports = router;