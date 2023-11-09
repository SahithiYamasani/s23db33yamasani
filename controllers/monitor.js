var monitor = require('../models/monitorSchema');
// List of all Costumes
exports.monitor_list = async function(req, res) {
    try
    {
    theMonitors = await monitor.find();
    res.send(theMonitors);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.monitor_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

exports.monitor_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.monitor_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor update PUT' + req.params.id);
};

    // VIEWS
// Handle a show all view
exports.monitor_view_all_Page = async function(req, res) {
try{
theMonitors = await monitor.find();
res.render('monitor', { title: 'Monitor Results', result: theMonitors });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Costume create on POST.
exports.monitor_create_post = async function(req, res) {
console.log(req.body)
let document = new monitor();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.model = req.body.model;
document.screen_size = req.body.screen_size;
document.price = req.body.price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

