const router = require("express").Router();
const controller = require('../controllers/category.controller')


/**
 * @swagger
 *components:
 *  schemas:
 *      Category:
 *          type: object
 *          properties:
 *              name : 
 *                  type: string
 *          example: 
 *              name : Bebidas
 *              
 */

/**
 * @swagger
 * /category:
 *  get:
 *      sumary : get all categories
 *      tags : [Category]   
 *      responses:
 *          200:
 *              description : all categories!!
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /category:
 *  post:
 *      sumary : create a new category
 *      tags : [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description : new categoty created!!
 */
router.post('/', controller.createCategory);

/**
 * @swagger
 * /category/{id}:
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
 *              aplication/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description : category update sucesfull
 *          404:
 *              description:  category not found
 *                  
 */
router.put('/:id', controller.editCategory)

/**
 * @swagger
 * /category/{id}:
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
 *                  
 */
router.delete('/:id', controller.deleteCategory)

module.exports = router;