const router = require("express").Router();
const controller = require('../controllers/product.controller')

/**
 * @swagger
 * /product:
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
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /product:
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
 *          200:
 *              description : new product created!
 *          400:
 *              description: error to create product
 */
router.post('/', controller.create);

/**
 * @swagger
 * /product/{id}:
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
 */
router.put('/:id', controller.edit)

/**
 * @swagger
 * /product/{id}:
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
 */
router.delete('/:id', controller.deleteOne)

/**
 * @swagger
 * /product/{id}/stock:
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
 */
router.put('/:id/stock', controller.updateStock);

module.exports = router;