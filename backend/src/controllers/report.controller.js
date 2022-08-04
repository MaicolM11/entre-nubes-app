import Report from "../models/Report"
import { reportFilter } from "../utils/filter.util";

// pageable
export const getAll = (req, res) => {
    Report.find()
        .then(reports => res.status(200).json(reports))
        .catch(error => res.status(400).json({ message: error.message }));
}

export const generateReport = (bills) => {
    if(!bills || bills.length == 0) 
        return;
    const report = {};
    let dates = bills.map(x => x.date);
    report.start_date = new Date(Math.min(...dates));
    report.end_date = new Date(Math.max(...dates));
    report.total = bills.map(x => x.total).reduce((a, b) => a + b, 0);
    report.subtotal = bills.map(x => x.subtotal).reduce((a, b) => a + b, 0);
    report.profit = report.total - report.subtotal;
    const newReport = new Report(report);
    newReport.save();
}

export const getByFilter = (req, res) => {
    const filter = reportFilter(req.query);
    Report.find(filter)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ message: error.message }));
}