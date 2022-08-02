const router = require("express").Router();
const controller = require('../controllers/auth.controller')

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      sumary : Login app
 *      tags : [Auth]   
 *      responses:
 *          200:
 *              description: success login!
 *          404:
 *              description: User not found
 *          401:
 *              description: Invalid Password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Login'
 */
router.post("/login", controller.login);

module.exports = router;