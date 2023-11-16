var monitor = require('../models/monitorSchema');

exports.monitor_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await monitor.findById( req.query.id)
    res.render('monitordetail',
    { title: 'Monitor Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.monitor_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('monitorcreate', { title: 'Monitor Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

  
    // query provides the id
exports.monitor_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await monitor.findById(req.query.id)
    res.render('monitorupdate', { title: 'Monitor Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle a delete one view with id from query
exports.monitor_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await monitor.findById(req.query.id)
    res.render('monitordelete', { title: 'Monitor Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
