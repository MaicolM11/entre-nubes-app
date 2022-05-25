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
 *      response:
 *          200:
 */
router.post('/', controller.createCategory);
router.put('/:id', controller.editCategory)
router.delete('/:id', controller.deleteCategory)

module.exports = router;