const router = require("express").Router();
const controller = require('../controllers/user.controller')

import { isAdmin } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

// admin
router.post('/', [verifyToken, isAdmin] ,controller.createUser);
router.get('/', [verifyToken, isAdmin] ,controller.getAll);
router.get('/search', [verifyToken, isAdmin], controller.searchUser);
router.delete('/:id', [verifyToken, isAdmin], controller.deleteOne)

// any rol
router.get('/my-info', [verifyToken], controller.getInfo)

module.exports = router;