const router = require("express").Router();
const controller = require('../controllers/bolirana.controller')

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
router.post('/', [], controller.create);

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
router.put('/:id/start', [], controller.startBolirana);

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
router.put('/:id/reset', [], controller.resetBolirana);

module.exports = router;