
const Task = require('../models/taskSchema');

const report_list = function(req, res){
    Task.find({}, function(error, result){
        if(error){
            console.log("there was an error while retrieving the data");
            console.log(error);
        }else{
            res.render("components/showReports", {
                reportList: result
            });
        }
    });

};

const report_add =function (req, res) {
    res.render('components/addReport');
};

const report_add_post=(req, res) => {
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

module.exports ={
    report_list,
    report_add,
    report_add_post
}