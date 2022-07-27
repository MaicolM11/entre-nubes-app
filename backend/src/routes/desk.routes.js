const router = require("express").Router();
const controller = require('../controllers/desk.controller');

import { hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from '../middlewares/jwt'


/**
 * @swagger
 * /api/desk/close:
 *  put:
 *      sumary : closing desk
 *      tags : [Bill]
 *      responses:
 *          200:
 *              description : in process
 *      security:
 *	        - jwt: []
*/
router.put('/close', [verifyToken, hasAnyRol], controller.deskClosing);

module.exports = router;