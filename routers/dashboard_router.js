/**
 * Created by razon on 8/14/16.
 */

// initial declaraization


var express = require('express');
var router = express.Router();


// exporting the module to the outer world
module.exports = router;

// routing to the dashboard
router.route('/')
    .get(function (req, res) {
        // res.render('bn_BD/dashboard');
        res.render('bn_BD/dashboard',{ main_content:"default" });
    });

router.route('/rfq_request')
    .get(function (req, res) {
        // res.render('bn_BD/RFQ_Request');
        res.render('bn_BD/dashboard',{ main_content:"rfq_request" });
    });

router.route('/rfq_running')
    .get(function (req, res) {
       // res.render('bn_BD/RFQ_Running');
        res.render('bn_BD/dashboard',{ main_content:"rfq_running" });
    });

router.route('/rfq_list')
    .get(function (req, res) {
        res.render('bn_BD/RFQ_List');
    });
