var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var monitor_controller = require('../controllers/monitor');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/monitor', monitor_controller.monitor_create_post);
// DELETE request to delete Costume.
router.delete('/monitor/:id', monitor_controller.monitor_delete);
// PUT request to update Costume.
router.put('/monitor/:id', monitor_controller.monitor_update_put);
// GET request for one Costume.
router.get('/monitor/:id', monitor_controller.monitor_detail);
// GET request for list of all Costume items.
router.get('/monitors', monitor_controller.monitor_list);
module.exports = router;