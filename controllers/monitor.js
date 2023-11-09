var Costume = require('../models/monitor');
// List of all Costumes
exports.monitor_list = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor list');
};
// for a specific Costume.
exports.monitor_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.monitor_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor create POST');
};
// Handle Costume delete form on DELETE.
exports.monitor_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.monitor_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor update PUT' + req.params.id);
};
