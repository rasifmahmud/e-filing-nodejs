/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var RFQ = require("../models/RFQ");
var _ = require('lodash');
var router = express.Router();
module.exports = router;
var PATH = require('path');

router.route('/data')
    .get(function (req, res) {
        RFQ.getAllRFQbyUserID(req.user._id, function (err, result) {
            if (err) return console.log(err);
            res.json({user: req.user, RFQ_list: result});

        });
    });


router.route('/upload')
    .post(function (req, res) {
        RFQ.insertRFQ(req.body, req.user._id, function (err, doc) {
            if(err) return console.log(err);
            res.sendStatus(200);
        });

    });

router.route('/pic')
    .get(function (req, res) {

        var path = req.user.profilePic;
        res.sendFile(PATH.join(__dirname,'..',path));
    });

router.route('/rfq_list/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.json({RFQ_Index:id});

    });