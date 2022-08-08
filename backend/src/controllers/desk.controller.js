import Bill from "../models/Bill";
import Debtor from "../models/Debtor";
import { BILL_STATES } from "../models/Enums";
import { getDateWithFormat } from "../utils/format";
import {emitLastBills} from "./bill.controller"
import { createNotification } from "./notification.controller";
import { generateReport } from './report.controller';

export const deskClosing = (req, res) => {
    res.sendStatus(200);
    
    const now = getDateWithFormat(new Date())
    const notification = {
        type: "Cierre de caja a las " + now.time + " del " + now.date,
        message: "", 
        
    }

    Bill.find({ status: BILL_STATES.DUE })
        .then(data => {
            if(data.length > 0){
                notification.message = "No se puede cerrar caja con ventas pendientes.";
                throw new Error();      
            }
            return true;
        })
        .then(() => 
            Bill.aggregate([{ $match: {} }, { $out: "bills" }])
        )
        .then(() => {
            return Debtor.updateMany({}, {
                $set: {
                    'debts.$[].reference': "bills"
                }
            }, { multi: true });
        })
        .then(async () => {
            const data = await Bill.find();
            generateReport(data);
        })
        .then(() => {
            return Bill.deleteMany()
        })
        .then(() => {
            notification.message = "Cierre de caja exitoso!"; 
            emitLastBills()
            createNotification(notification);
        })
        .catch(err => {
            if(!notification.message || notification.message.length == 0)
                notification.message = "El cierre de caja ha fallado!"
            createNotification(notification);
        });
}