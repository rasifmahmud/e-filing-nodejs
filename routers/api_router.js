/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var rfq = require("../models/RFQ");
var user = require("../models/users");
var router = express.Router();
module.exports = router;

router.route('/data')
    .get(function (req, res) {
        res.json(req.user);
    })
    .post(function (req, res) {
        res.sendStatus(200);
    });