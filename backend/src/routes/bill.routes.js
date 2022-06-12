/***
 * add new
 * append products
 * change state
 * get all my active bills - salesman
 * get all day - admin - web sockets
 * 
 */

const router = require("express").Router();

const controller = require('../controllers/bill.controller')

import { isAdmin, isSalesman, hasAnyRol } from '../middlewares/checkRole'
import { verifyToken } from './../middlewares/jwt'

router.post("/", [verifyToken, hasAnyRol], controller.createBill);
router.get("/today/my-bills", [verifyToken, hasAnyRol], controller.getMyLastBills);

router.get("/today/all", [verifyToken, isAdmin], controller.getAllLastBills);


module.exports = router;