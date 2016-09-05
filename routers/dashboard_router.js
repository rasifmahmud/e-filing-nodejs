/**
 * Created by razon on 8/14/16.
 */

// initial declaraization


var express = require('express');
var router = express.Router();
var RFQ = require("../models/RFQ");

// exporting the module to the outer world
module.exports = router;

//using middleware
router.use('/rfq_detail', express.static('public'));

// routing to the dashboard
router.route('/')
    .get(function (req, res) {
        res.render('bn_BD/dashboard', {main_content: "default"});

    });

router.route('/rfq_request')
    .get(function (req, res) {
        res.render('bn_BD/dashboard', {main_content: "rfq_request"});
    });

router.route('/rfq_running')
    .get(function (req, res) {
        res.render('bn_BD/dashboard', {main_content: "rfq_running"});
    });

router.route('/rfq_list')
    .get(function (req, res) {

        res.render('bn_BD/dashboard', {main_content: "rfq_list"});

    });

router.route('/rfq_detail/:id')
    .get(function (req, res) {
        res.render('bn_BD/RFQ_Detail', {main_content: "default"});

    });

router.route('/rfq_detail/:id')
    .get(function (req, res) {
        
        res.render('bn_BD/RFQ_Detail',{main_content:"default"});

    });

router.route('/test')
    .get(function (req, res) {
        // res.render('bn_BD/RFQ_Running');
        res.render('bn_BD/dashboard', {main_content: "test"});
    });

