exports.getIntersections = function(req, res) {
    console.log('in /routes/ post getintersections, about to return intersections');

    req.app.db.models.Intersection.find( {}, function(err, intersections) {
	    if (err) { console.error('error', err.stack); return;}

	    //console.log('intersections: ' + JSON.stringify(intersections));
	    ints = intersections[0].intersections;
	    //console.log('ints: ' + JSON.stringify(ints));
	    //console.log(JSON.stringify(ints[0]));

	    var response = {
		result: ints
	    };

	    res.send(JSON.stringify(response));
	    console.log('intersections sent');
	});
}