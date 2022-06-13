const router = require("express").Router();

const controller = require('../controllers/bill.controller')

import { isAdmin, isSalesman, hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

/**
 * @swagger
 * /api/bill:
 *  post:
 *      sumary : create a new bill
 *      tags : [Bill]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/CreateBill'
 *      responses:
 *          201:
 *              description : new bill created!!
 *          400: 
 *              description: Error to created bill
 *      security:
 *	        - jwt: []
 */
router.post("/", [verifyToken, hasAnyRol], controller.createBill);

/**
 * @swagger
 * /api/bill/append/{id}:
 *  put:
 *      sumary : create a new bill
 *      tags : [Bill]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: bill id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/AppendProductsToBill'
 *      responses:
 *          201:
 *              description : bill updated!
 *          400: 
 *              description: Error to update bill
 *      security:
 *	        - jwt: []
 */
router.put("/append/:id", [verifyToken, hasAnyRol], controller.appendProductsToBill)

/**
 * @swagger
 * /api/bill/my-sales/today:
 *  get:
 *      sumary : get all categories
 *      tags : [Bill]   
 *      responses:
 *          200:
 *              description : all my sales today!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Bill'
 *      security:
 *	        - jwt: []
 */
router.get("/my-sales/today", [verifyToken, hasAnyRol], controller.getMyLastBills);

// web socket
router.get("/all-sales/today", [verifyToken, isAdmin], controller.getAllLastBills);

module.exports = router;