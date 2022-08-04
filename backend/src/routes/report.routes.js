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

/**
 * @swagger
 * /api/report/search:
 *  get:
 *      sumary : search product
 *      tags : [Report]   
 *      parameters:
 *          - in : query
 *            name: params
 *            schema:
 *              type: object
 *              additionalProperties: true
 *            description : params to search, start_date, end_date as YYYY-MM-DD
 *      responses:
 *          200:
 *              description: get reports!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Report'
 *          400: 
 *              description: Error to get reports
 *      security:
 *	        - jwt: []
 */
router.get('/search', [verifyToken, hasAnyRol], controller.getByFilter);

module.exports = router;