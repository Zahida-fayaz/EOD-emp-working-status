
const Task = require('../models/taskSchema');

const report_list = function (req, res) {
    Task.find({}, function (error, result) {
        if (error) {
            console.log("there was an error while retrieving the data");
            console.log(error);
        } else {
            res.render("components/showReports", {
                reportList: result
            });
        }
    });

};

const report_add = function (req, res) {
    res.render('components/addReport');
};

const report_add_post = (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then(() => {
            console.log("data added");
            console.log(task);
        })
        .catch(err => {
            console.log("got an error");
            console.log(err);
        })
    res.redirect('report/show');
};

const report_id_edit = (req, res) => {
    const id = req.params.id;
    Task.findById(id, (error, foundReport) => {
        if (error) {
            res.send("Error found")
        } else {
            res.render('components/edit', { foundReport: foundReport })
        }
    });
};

const report_edit_post = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Task.findByIdAndUpdate(id, { ...body }, (error) => {
        if (error) {
            res.send("Not upadted")
        } else {
            res.render('components/home')
        }
    });
};

const report_delete = (req, res) => {
    const id = req.params.id
    Task.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log("Got errror")
        } else {
            console.log("Deleted")
        }
    });
    res.redirect('report')
};

module.exports = {
    report_list,
    report_add,
    report_add_post,
    report_delete,
    report_id_edit,
    report_edit_post
}