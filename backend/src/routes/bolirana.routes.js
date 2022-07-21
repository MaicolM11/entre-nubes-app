const router = require("express").Router();
const controller = require('../controllers/bolirana.controller')

import { hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

/**
 * @swagger
 * /api/bolirana:
 *  post:
 *      sumary : create bolirana
 *      tags : [Bolirana]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          201:
 *              description : bolirana created
 *          400: 
 *              description: error to create bolirana
 *      security:
 *	        - jwt: []
 */
router.post('/', [verifyToken, hasAnyRol], controller.create);

/**
 * @swagger
 * /api/bolirana/{id}/start:
 *  put:
 *      sumary : start bolirana
 *      tags : [Bolirana]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bolirana id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          time:
 *                              type: number
 *      responses:
 *          201:
 *              description : bolirana started
 *          404:
 *              description:  bolirana not found
 *          400: 
 *              description: error to start bolirana
 *      security:
 *	        - jwt: []
 */
router.put('/:id/start', [verifyToken, hasAnyRol], controller.startBolirana);

/**
 * @swagger
 * /api/bolirana/{id}/reset:
 *  put:
 *      sumary : reset bolirana
 *      tags : [Bolirana]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bolirana id
 *      responses:
 *          201:
 *              description : bolirana reseted
 *          404:
 *              description:  bolirana not found
 *          400: 
 *              description: error to reset bolirana
 *      security:
 *	        - jwt: []
 */
router.put('/:id/reset', [verifyToken, hasAnyRol], controller.resetBolirana);

/**
 * @swagger
 * /api/bolirana:
 *  get:
 *      sumary : get all boliranas
 *      tags : [Bolirana]   
 *      responses:
 *          200:
 *              description : all boliranas!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Bolirana'
 *      security:
 *	        - jwt: []
 */
router.get('/', [verifyToken, hasAnyRol], controller.getAll);

/**
 * @swagger
 * /api/bolirana/{id}:
 *  delete:
 *      sumary : delete bolirana
 *      tags : [Bolirana]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bolirana id
 *      responses:
 *          200:
 *              description : bolirana eliminated
 *          404:
 *              description:  bolirana not found
 *      security:
 *	        - jwt: []
 */
router.delete('/:id', [verifyToken, hasAnyRol], controller.deleteById);

module.exports = router;