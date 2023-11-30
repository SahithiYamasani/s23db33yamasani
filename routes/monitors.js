var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var monitors_controller = require('../controllers/monitors');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
//router.post('/monitors', monitor_controller.monitor_create_post);
// DELETE request to delete Costume.
router.get('/detail',secured, monitors_controller.monitor_view_one_Page);


const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

//* GET create monitor page *
router.get('/create',secured, monitors_controller.monitor_create_Page)
//* GET create update page */
router.get('/update',secured, monitors_controller.monitor_update_Page);
/* GET delete costume page */
router.get('/delete',secured, monitors_controller.monitor_delete_Page);

module.exports = router;