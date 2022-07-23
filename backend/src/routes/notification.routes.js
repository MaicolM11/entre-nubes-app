const router = require("express").Router();
const controller = require('../controllers/notification.controller');

import { hasAnyRol } from '../middlewares/checkRole';
import {verifyToken} from '../middlewares/jwt'

/**
 * @swagger
 * /api/notification/{id}:
 *  delete:
 *      sumary : delete notification
 *      tags : [Notification]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : notification id
 *      responses:
 *          200:
 *              description : notification eliminated
 *          404:
 *              description:  notification not found
 *      security:
 *	        - jwt: []
 */
router.delete('/', [verifyToken, hasAnyRol], controller.deleteById)

/**
 * @swagger
 * /api/notification/read-all:
 *  put:
 *      sumary : mark all notifications as read
 *      tags : [Notification]
 *      responses:
 *          200:
 *              description : successful
 *          400:
 *              description: error
 *      security:
 *	        - jwt: []
 */
router.put('/read-all', [verifyToken, hasAnyRol], controller.markAsRead);

module.exports = router;