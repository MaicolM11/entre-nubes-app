import { emitLastBills } from "../controllers/bill.controller";

export const emitBills = (req, res, next) => {
    res.on('finish', async () => {
        if(res.statusCode >= 200 && res.statusCode < 300){
            emitLastBills();
        }
    });
    next()
}