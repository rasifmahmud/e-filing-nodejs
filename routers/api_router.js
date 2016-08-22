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
        rfq.getFullRFQListbyUsername(req.user.username, function (err, result) {
            if (err) return console.log(err);
            res.json({user: req.user, rfq_list: result});
        });

    })
    .post(function (req, res) {
        res.sendStatus(200);
    });