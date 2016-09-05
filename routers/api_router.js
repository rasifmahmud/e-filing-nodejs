/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var RFQ = require("../models/RFQ");
var notification = require("../models/notifications");
var user = require("../models/users");
var _ = require('lodash');
var router = express.Router();
module.exports = router;
var PATH = require('path');
var real = require('../realtime/realtime');
router.route('/data')
    .get(function (req, res) {
        RFQ.getAllRFQbyUserID(req.user._id, function (err, result) {
            if (err) return console.log(err);
            notification.getnotificationsbyuserid(req.user._id, function (err2, result2) {
                if (err2) return console.log(err2);
                user.getbydesignation("Scientific Officer", function (err3, result3) {
                    if (err3) return console.log(err3);

                    res.json({user: req.user, RFQ_list: result, notification: result2, verifier: result3});

                });

            });


        });
    });

router.route('/rfq_detail/:id')
    .get(function (req, res) {
        var RFQ_ID = req.params.id;
        var user_ID = req.user._id;
        RFQ.getRFQdetailsbyID(RFQ_ID, user_ID, function (err, result) {
            if (err) return console.log(err);
            notification.getnotificationsbyuserid(user_ID, function (err2, result2) {
                if (err2) return console.log(err2);
                user.getbydesignation("Scientific Officer", function (err3, result3) {
                    if (err3) return console.log(err3);
                    res.json({user: req.user, RFQ_detail: result, notification: result2, forward_list: result3});
                })

            });
        });
    });

router.route('/upload')
    .post(function (req, res) {
        RFQ.insertRFQ(req.body, req.user._id, function (err, doc) {
            if (err) return console.log(err);
            res.sendStatus(200);
        });

    });
router.route('/upload_jachaikari')
    .post(function (req, res) {

        console.log(req.body);
        real.sendThroughSockets("57b9eaa64a2cc77834c9c7c5", "ore motherchod");
    });

router.route('/pic')
    .get(function (req, res) {

        var path = req.user.profilePic;
        res.sendFile(PATH.join(__dirname, '../data/images', path));
    });

router.route('/pic/:path')
    .get(function (req, res) {

        var path = req.params.path;
        res.sendFile(PATH.join(__dirname, '../data/images', path));
    });

