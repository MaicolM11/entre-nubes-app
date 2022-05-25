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
 *                  aplication/json:
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
 *              aplication/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description : new product created!
 *          400:
 *              description: error to create product
 */
router.post('/', controller.create);


router.put('/:id', controller.edit)
router.delete('/:id', controller.deleteOne)

router.put('/:id/stock', controller.updateStock);

module.exports = router;