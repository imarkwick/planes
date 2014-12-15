describe('Plane', function() {

	var plane;

	beforeEach(function() {
		plane = new Plane();
		airport = jasmine.createSpyObj('airport', ['parks', 'releases']);
	});

	it('is flying when initialized', function() {
		expect(plane.isFlying()).toBe(true);
	});

	it('should be able to land', function() {
		plane.land();
		expect(plane.isFlying()).toBe(false);
	});

	it('should be able to land at an airport', function() {
		plane.landOn(airport);
		expect(airport.parks).toHaveBeenCalledWith(plane);
	});

	it('is not flying after landing', function() {
		plane.landOn(airport);
		expect(plane.isFlying()).toBe(false);
	});

	it('should take off from the airport', function() {
		plane.takeOffFrom(airport);
		expect(airport.releases).toHaveBeenCalledWith(plane);
	});

	it('should be at the airport once landed', function() {
		plane.landOn(airport);
		expect(airport.parks).toHaveBeenCalledWith(plane);
	});

	it('is flying after takeoff', function() {
		plane.takeOffFrom(airport);
		expect(plane.flying).toBe(true);
	});
});