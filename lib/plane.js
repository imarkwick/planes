function Plane() {
	this.flying = true;
};

Plane.prototype.landOn = function(airport) {
	airport.parks(this);
	this.land();
};

Plane.prototype.isFlying = function() {
	return this.flying;
};

Plane.prototype.land = function() {
	this.flying = false;
};

Plane.prototype.takeOffFrom = function(airport) {
	airport.releases(this);
};
