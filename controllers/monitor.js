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
exports.monitor_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await monitor.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

exports.monitor_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Monitor delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.monitor_update_put = async function(req, res) 
{
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try 
    {
        let toUpdate = await monitor.findById(req.params.id)
        // Do updates of properties
        if(req.body.model)toUpdate.model = req.body.model;
        if(req.body.screen_size) toUpdate.screen_size = req.body.screen_size;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } 
    catch (err) 
    {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
}

    // VIEWS
// Handle a show all view
exports.monitor_view_all_Page = async function(req, res) 
{
    try
    {
        theMonitors = await monitor.find();
        res.render('monitor', { title: 'Monitor Results', result: theMonitors });
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.monitor_create_post = async function(req, res) 
{
    console.log(req.body)
    let document = new monitor();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
    document.model = req.body.model;
    document.screen_size = req.body.screen_size;
    document.price = req.body.price;
    try
    {
        let result = await document.save();
        res.send(result);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

