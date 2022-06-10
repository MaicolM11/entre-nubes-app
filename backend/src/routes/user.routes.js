const router = require("express").Router();
const controller = require('../controllers/user.controller')

import { isAdmin } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

/**
 * @swagger
 * /api/user:
 *  post:
 *      sumary : create a new user
 *      tags : [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description : new user created!
 *          400:
 *              description: error to create user
 *          422:
 *              description: Invalid argument exception
 *      security:
 *	        - jwt: []
 */
router.post('/', [verifyToken, isAdmin] ,controller.createUser);

/**
 * @swagger
 * /api/user:
 *  get:
 *      sumary : get all users
 *      tags : [User]   
 *      responses:
 *          200:
 *              description: get all users!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          400: 
 *              description: Error to get all users
 *      security:
 *	        - jwt: []
 */
router.get('/', [verifyToken, isAdmin] ,controller.getAll);

/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *      sumary : delete user
 *      tags : [User]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description : user id
 *      responses:
 *          200:
 *              description : user eliminated
 *          400:
 *              description : error to delete user
 *      security:
 *	        - jwt: []
 */
router.delete('/:id', [verifyToken, isAdmin], controller.deleteOne)

/**
 * @swagger
 * /api/user/search:
 *  get:
 *      sumary : search user
 *      tags : [User]   
 *      parameters:
 *          - in : query
 *            name: params
 *            schema:
 *              type: object
 *              additionalProperties: true
 *            description : params to search
 *      responses:
 *          200:
 *              description: get all users!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          400: 
 *              description: Error to get users
 *      security:
 *	        - jwt: []
 */
router.get('/search', [verifyToken, isAdmin], controller.searchUser);

/**
 * @swagger
 * /api/user/my-info:
 *  get:
 *      sumary : get info by token
 *      tags : [User]   
 *      responses:
 *          200:
 *              description: get all users!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404: 
 *              description: User not found
 *          400: 
 *              description: Error to get users
 *      security:
 *	        - jwt: []
 */
router.get('/my-info', [verifyToken], controller.getInfo)

module.exports = router;