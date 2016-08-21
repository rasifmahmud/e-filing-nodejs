/**
 * Created by razon on 8/19/16.
 */
var express = require('express');
var router = express.Router();
module.exports = router;

router.route('/data')
    .get(function (req, res) {
        res.json(req.user);
    })
    .post(function (req, res) {
        console.log("#########################");
        console.log(req.body);
        console.log("#########################");
        res.sendStatus(200);
    });