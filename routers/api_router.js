/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var rfq = require("../models/RFQ");
var rfqdetails = require("../models/RFQ_info");
var router = express.Router();
module.exports = router;

router.route('/data')
    .get(function (req, res) {
        rfq.getFullRFQListbyUsername(req.user.username,function (err, result) {
            if(err) return console.log(err);
            console.log(result[0]._id);
            rfqdetails.getRFQInfobyID(result._id,function (err2, result2) {
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                console.log(result._id);
                console.log(result2);
                res.json({user:req.user , rfq_list:result, rfq_info:result2});
            });

        });

    })
    .post(function (req, res) {
        res.sendStatus(200);
    });