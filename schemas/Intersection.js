exports = module.exports = function(app, mongoose) {
    var intersectionSchema = new mongoose.Schema({
	    intersections: []
	});
    // maps collection austin to intersectionSchema and its label Intersection
    app.db.model('Intersection', intersectionSchema, 'intersections');
    // http://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
}
