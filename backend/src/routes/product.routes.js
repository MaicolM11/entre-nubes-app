const router = require("express").Router();
const controller = require('../controllers/product.controller')

import { isAdmin } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'


/**
 * @swagger
 * /api/product:
 *  get:
 *      sumary : get all products
 *      tags : [Product]   
 *      responses:
 *          200:
 *              description: get all products!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          400: 
 *              description: Error to get all products
 *      security:
 *	        - jwt: []
 */
router.get('/',[verifyToken], controller.getAll);

/**
 * @swagger
 * /api/product/search:
 *  get:
 *      sumary : search product
 *      tags : [Product]   
 *      parameters:
 *          - in : query
 *            name: params
 *            schema:
 *              type: object
 *              additionalProperties: true
 *            description : params to search
 *      responses:
 *          200:
 *              description: get products!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          400: 
 *              description: Error to get products
 *      security:
 *	        - jwt: []
 */
router.get('/search', [verifyToken], controller.searchProduct);

/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *      sumary : get product by id
 *      tags : [Product]   
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : product id
 *      responses:
 *          200:
 *              description: get all products!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400: 
 *              description: Error to get product
 *          404: 
 *              description: Product not found
 *      security:
 *	        - jwt: []
 */
router.get('/:id', [verifyToken], controller.getById);

/**
 * @swagger
 * /api/product:
 *  post:
 *      sumary : create a new product
 *      tags : [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          201:
 *              description : new product created!
 *          400:
 *              description: error to create product
 *          422:
 *              description: Invalid argument exception
 *      security:
 *	        - jwt: []
 */
router.post('/', [verifyToken, isAdmin], controller.create);

/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *      sumary : update product
 *      tags : [Product]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : product id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description : product update sucesfull
 *          404:
 *              description:  product not found
 *          422:
 *              description: Invalid argument exception
 *      security:
 *	        - jwt: []
 */
router.put('/:id', [verifyToken, isAdmin], controller.edit)

/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *      sumary : delete product
 *      tags : [Product]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : product id
 *      responses:
 *          200:
 *              description : product eliminated
 *      security:
 *	        - jwt: []
 */
router.delete('/:id', [verifyToken, isAdmin], controller.deleteOne)

/**
 * @swagger
 * /api/product/{id}/stock:
 *  put:
 *      sumary : add stock to product
 *      tags : [Product]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : product id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          increment:
 *                              type: integer
 *      responses:
 *          200:
 *              description : product stock update sucesfull
 *          404:
 *              description:  product not found
 *      security:
 *	        - jwt: []
 */
router.put('/:id/stock', [verifyToken, isAdmin], controller.updateStock);


module.exports = router;