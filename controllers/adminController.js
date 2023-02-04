const Report = require('../models/report');


//all-reports
const all_reports = (req, res) => {
    Report.find({}, (error, foundReport) => {
        if (error) {
            console.log("Error")
        } else {
            res.render('components/show', { foundReport: foundReport })
        }
    });
};
module.exports = {
    all_reports
}