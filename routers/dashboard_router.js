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
        res.render('bn_BD/dashboard');
    });

router.route('/rfq_request')
    .get(function (req, res) {
        res.render('bn_BD/RFQ_Request');
    });

router.route('/rfq_running')
    .get(function (req, res) {
        res.render('bn_BD/RFQ_Running');
    });

router.route('/rfq_list')
    .get(function (req, res) {
        res.render('bn_BD/RFQ_List');
    });
