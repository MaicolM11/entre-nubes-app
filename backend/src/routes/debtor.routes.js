const router = require("express").Router();
const controller = require('../controllers/debtor.controller');

import { hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

/**
 * @swagger
 * /api/debtor:
 *  post:
 *      sumary : create a new debtor
 *      tags : [Debtor]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Debtor'
 *      responses:
 *          201:
 *              description : new debtor created!
 *          400:
 *              description: error to create debtor
 *      security:
 *	        - jwt: []
 */
router.post('/', [verifyToken, hasAnyRol], controller.create);

/**
 * @swagger
 * /api/debtor:
 *  get:
 *      sumary : get all debtors
 *      tags : [Debtor]   
 *      responses:
 *          200:
 *              description: get all debtors!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Debtor'
 *          400: 
 *              description: Error to get all debtors
 *      security:
 *	        - jwt: []
 */
router.get('/', [verifyToken, hasAnyRol], controller.getAll);

/**
 * @swagger
 * /api/debtor/{id}/debts:
 *  get:
 *      sumary : get debtor by id
 *      tags : [Debtor]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : debtor id
 *      responses:
 *          200:
 *              description : debtor found!
 *          400:
 *              description: debtor not found!
 *      security:
 *	        - jwt: []
 */
router.get('/:id/debts', [verifyToken, hasAnyRol], controller.getDebtsOfDebtor);

module.exports = router;