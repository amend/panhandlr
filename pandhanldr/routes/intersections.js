exports.getIntersections = function(req, res) {
    console.log('in /routes/ post getintersections, about to return intersections');

    req.app.db.models.Intersection.find( {}, function(err, intersections) {
	    if (err) { console.error('error', err.stack); return;}

	    var response = {
		result: intersections
	    };

	    res.send(JSON.stringify(response));
	    console.log('intersections sent');
	});
}