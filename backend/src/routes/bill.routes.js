const router = require("express").Router();

const controller = require('../controllers/bill.controller')
const payController = require('../controllers/paymentAndDue.controller');

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
router.post('/', [verifyToken, hasAnyRol], controller.createBill);

/**
 * @swagger
 * /api/bill/append/{id}:
 *  put:
 *      sumary : append sales to bill
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
router.put('/append/:id', [verifyToken, hasAnyRol], controller.appendProductsToBill)

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
router.get('/my-sales/today', [verifyToken, hasAnyRol], controller.getMyLastBills);

/**
 * @swagger
 * /api/bill/{id}/sales:
 *  get:
 *      sumary : get all products of bill
 *      tags : [Bill]   
 *      responses:
 *          200:
 *              description : success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Sale'
 *      security:
 *	        - jwt: []
 */
router.get('/:id/sales', [verifyToken, hasAnyRol], controller.getSalesOfBill);

/**
 * @swagger
 * /api/bill/{id}/payment:
 *  put:
 *      sumary : pay bill
 *      tags : [Bill]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bill id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          payment_method:
 *                              type: string
 *      responses:
 *          200:
 *              description : bill update sucesfull
 *          404:
 *              description:  bill not found
 *          400: 
 *              description: error to pay bill
 *      security:
 *	        - jwt: []
 */
router.put('/:id/payment', [verifyToken, hasAnyRol], payController.payBill);

/**
 * @swagger
 * /api/bill/{id}/due:
 *  put:
 *      sumary : append due bill
 *      tags : [Bill]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bill id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          debtor_id:
 *                              type: string
 *      responses:
 *          200:
 *              description : sucesfull
 *          404:
 *              description:  bill not found
 *          400: 
 *              description: error
 *      security:
 *	        - jwt: []
 */
router.put('/:id/due', [verifyToken, hasAnyRol], payController.assingBillToDebtor);

/**
 * @swagger
 * /api/bill/{id}/due/payment:
 *  put:
 *      sumary : pay due bill
 *      tags : [Bill]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : bill id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          payment_method:
 *                              type: string
 *      responses:
 *          200:
 *              description : bill update sucesfull
 *          404:
 *              description:  bill not found
 *          400: 
 *              description: error to pay bill
 *      security:
 *	        - jwt: []
 */
router.put('/:id/due/payment', [verifyToken, hasAnyRol], payController.payDueBill);


module.exports = router;