const router = require("express").Router();
const controller = require('../controllers/category.controller')

router.get('/', controller.getAll);
router.post('/', controller.createCategory);
router.put('/:id', controller.editCategory)
router.delete('/:id', controller.deleteCategory)

module.exports = router;