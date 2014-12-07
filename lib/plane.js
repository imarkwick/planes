function Plane(flying) {
	this.flying = true;
};

Plane.prototype.lands = function(airport) {
	this.flying = false;
	airport.parks(this);
};

Plane.prototype.takeOff = function(airport) {
	this.flying = true;
	airport.releases(this);
};

