const router = require("express").Router();
const controller = require('../controllers/user.controller')

// admin
router.post('/', controller.createUser);
router.get('/', controller.getAll);
router.get('/search', controller.searchUser);
router.delete('/:id', controller.deleteOne)

module.exports = router;