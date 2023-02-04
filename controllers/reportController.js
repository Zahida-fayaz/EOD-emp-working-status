const Report = require('../models/report');

//all reports
// const all_reports = (req, res) => {
//     Report.find({}, (error, foundReport) => {
//         if (error) {
//             console.log("Error")
//         } else {
//             res.render('components/show', { foundReport })
//         }
//     });
// };

/*
const all_reports = (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 5 } = req.query;
  
    try {
      // execute query with page and limit values
      const posts =  Report.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      // get total documents in the Posts collection 
      const count =  Report.countDocuments();
  
      // return response with posts, total pages, and current page
      res.render('components/show', {
        posts: posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  */

//to the new report
const reports_new = (req, res) => {
    res.render('components/new')
};

//add the report
const reports_new_post = (req, res) => {
    const report = new Report(req.body);
    report.save()
        .then(() => {
            console.log("Data Added")
            console.log(report)
        })
        .catch(err => {
            console.log("Got an error")
            console.log(err)
        })
    res.redirect('/')
}

//show one
const report_id = (req, res) => {
    const id = req.params.id;
    Report.findById(id, (error, foundReport) => {
        if (error) {
            console.log("Id not found")
        } else {
            console.log(foundReport)
            res.render('components/show', { foundReport: foundReport })
        }
    });
}

//edit page
const reports_id_edit = (req, res, next) => {
    const id = req.params.id;
    Report.findById(id, (error, foundReport) => {
        if (error) {
            console.log("Data cannot be added")
        } else {
            res.render('components/edit', { foundReport });
        }
    });
};

//update report
const reports_id_update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Report.findByIdAndUpdate(id, { ...body }, (error, updateReport) => {
        if (error) {
            console.log("Report Not found.")
        } else {
            res.redirect('/reports');
            console.log('update Successfully', updateReport);
        }
    });
};

//delete report
const reports_id_delete = (req, res) => {
    const id = req.params.id;
    Report.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log("Report not deleted")
        } else {
            console.log('Deleted succcessfully');
            res.redirect('/reports');
        }
    })
};


module.exports = {
    // all_reports,
    reports_new,
    reports_new_post,
    report_id,
    reports_id_edit,
    reports_id_update,
    reports_id_delete
  
}