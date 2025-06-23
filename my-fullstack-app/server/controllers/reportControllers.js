const reportDB = require("../model/reportModel");


// getReportdata from reportDB
exports.getReportdata = async (req, res) => {
    try {
        const getReports = await reportDB.find();
        res.status(200).json(getReports)
    } catch (error) {
        console.log("catcth block", error)
        res.status(400).json({ error: error })
    }
}