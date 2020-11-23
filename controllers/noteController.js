const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/Note')

router.get('/', (req, res) => {
    res.render("note", {
        title: "Create Your Note"
    });
});

router.post('/note', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
});

function insertRecord(req, res) {
    var note = new Note();
    note.note = req.body.note;
    note.save((err, doc) => {
        if (err){
            console.log("Error in creating note",err)
        }
           return res.render('link');  
    });
}


router.get('/list', (req, res) => {
    Note.find((err, docs) => {
        if (!err) {
           return res.render("list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

router.get('/link',(req, res) => {
    // Note.find((err, docs) => {
    //     if (!err) {
    //       return  res.render("link", {
    //             list: docs
    //         });
    //     }
    //     else {
    //         console.log('Error in retrieving note :' + err);
    //     }
    // });
    return  res.render("link", {
                list: docs
    });
})

module.exports = router;


