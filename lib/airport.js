function Airport(name) {
	this.name = name;
	this.planes = [];
};

Airport.prototype.parks = function(plane) {
	this.planes.push(plane)
};

Airport.prototype.releases = function(plane) {
	this.planes.pop(plane)
};