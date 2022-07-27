const router = require("express").Router();
const controller = require('../controllers/report.controller');

import { hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from '../middlewares/jwt'

/**
 * @swagger
 * /api/report:
 *  get:
 *      sumary : get all reports
 *      tags : [Report]   
 *      responses:
 *          200:
 *              description: get all reports!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Report'
 *          400: 
 *              description: Error to get all reports
 *      security:
 *	        - jwt: []
 */
router.get('/', [verifyToken, hasAnyRol], controller.getAll);

module.exports = router;