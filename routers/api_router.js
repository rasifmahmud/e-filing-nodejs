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
var bcrypt = require("bcryptjs");

router.route('/data')
    .get(function (req, res) {
        RFQ.getAllRFQbyUserID(req.user._id, function (err, result) {
            if (err) return console.log(err);
            notification.getnotificationsbyuserid(req.user._id, function (err2, result2) {
                if (err2) return console.log(err2);
                user.getbydesignation("Scientific Officer", function (err3, result3) {
                    if (err3) return console.log(err3);
                    console.log(result3);
                    res.json({user: req.user, RFQ_list: result, notification: result2, forward_list: result3});

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
            console.log(result);
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
        console.log(req.body);
        var newRFQ= new RFQ({
            title: req.body.title,
            details: req.body.details,
            initiator_id: req.body.initiator_id,
            bidhi_niti: req.body.bidhi_niti,
            refer_verifier: req.body.refer_verifier
        });
        RFQ.createRFQ(newRFQ, function (err, doc) {
            if (err) return console.log(err);
            console.log("inserted...............")
            console.log(doc);
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

router.route('/verify')
    .post(function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        if(username==req.user.username){
            bcrypt.compare(password, req.user.password, function(err, result) {
                if(err) return console.log(err);
                // password matched
                if(result){
                    res.json("passed");
                }
                // password didnt match
                else{
                    res.json("failed");
                }
            });
        }
        else{
            res.json("failed");
        }

    });