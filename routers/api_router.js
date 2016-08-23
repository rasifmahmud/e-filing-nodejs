/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var rfq = require("../models/RFQ");
var _ = require('lodash');
var router = express.Router();
module.exports = router;

// function loop_through(result) {
//     _.map(result, function (r) {
//         rfqdetails.getRFQInfobyID(r._id, function (error, new_result) {
//             if (error) return console.log(error);
//             r.rfq_details = new_result;
//             // console.log(new_result);
//             r['rfq_details'] = 'hello';
//
//             // console.log(r);
//         });
//
//     })
// }
//
// function get_rfq(result,callback) {
//     loop_through(result);
//     callback(result);
//
// }
// function getThemAll(req,res) {
//     rfq.getFullRFQListbyUsername(req.user.username, function (err, result) {
//         if (err) return console.log(err);
//         get_rfq(result,function (result) {
//             // wanted to do my coding here
//         });
//
//     });
//
// }


router.route('/data')
    .get(function (req, res) {
        rfq.getFullRFQListbyUsername(req.user.username, function (err, result) {
            if (err) return console.log(err);
            res.json({user: req.user, rfq_list:result});

        });
    })
    .post(function (req, res) {
        res.sendStatus(200);
    });