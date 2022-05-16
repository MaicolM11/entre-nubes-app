const router = require("express").Router();
const controller = require('../controllers/Product.controller')

router.get("/", controller.getAll);

module.exports = router;