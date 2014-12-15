function Airport(name) {
	this.name = name;
	this.planes = [];
};

Airport.prototype.parks = function(plane) {
	this.planes.push(plane);
};

Airport.prototype.releases = function(plane) {
	// if weather(bad) throw new Error("Takeoff is not allowed");
	this.planes.pop(plane);
};

Airport.prototype.planeCount = function() {
	return this.planes.length;
};

Airport.prototype.weather = function(type) {
	if (type === "stormy") {
		return "Takeoff is not allowed";
	}
	else {
		return "Fine for takeoff";
	}
};
