const router = require("express").Router();
const controller = require('../controllers/category.controller')

import { isAdmin } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

/**
 * @swagger
 * /api/category:
 *  get:
 *      sumary : get all categories
 *      tags : [Category]   
 *      responses:
 *          200:
 *              description : all categories!!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *      security:
 *	        - jwt: []
 */
router.get('/', [verifyToken], controller.getAll);

/**
 * @swagger
 * /api/category:
 *  post:
 *      sumary : create a new category
 *      tags : [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description : new categoty created!!
 *          400: 
 *              description: Error to created category
 *          422:
 *              description: Invalid argument exception
 *      security:
 *	        - jwt: []
 */
router.post('/', [verifyToken, isAdmin], controller.create);

/**
 * @swagger
 * /api/category/{id}:
 *  put:
 *      sumary : update category
 *      tags : [Category]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : category id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: category update sucesfull
 *          400:
 *              description: error to update catedory 
 *          404:
 *              description:  category not found
 *          422:
 *              description: Invalid argument exception
 *      security:
 *	        - jwt: []
 */
router.put('/:id', [verifyToken, isAdmin], controller.edit)

/**
 * @swagger
 * /api/category/{id}:
 *  delete:
 *      sumary : delete category
 *      tags : [Category]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : category id
 *      responses:
 *          200:
 *              description : category eliminated
 *          404:
 *              description:  category not found
 *      security:
 *	        - jwt: []
 */
router.delete('/:id', [verifyToken, isAdmin] ,controller.deleteOne)

module.exports = router;