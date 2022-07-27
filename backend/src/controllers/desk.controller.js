import Bill from "../models/Bill";
import Debtor from "../models/Debtor";

import { createNotification } from "./notification.controller";
import { generateReport } from './report.controller';

export const deskClosing = (req, res) => {
    res.sendStatus(200);

    const notification = {
        type: 'Cierre de caja',
        message: ""
    }

    Bill.aggregate([{ $match: {} }, { $out: "bills" }])
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
            notification.message = "Cierre de caja exitoso!"
            createNotification(notification);
        })
        .catch(err => {
            notification.message = "El cierre de caja ha fallado!"
            createNotification(notification);
        });
}