describe ('Airport', function() {

	var airport, plane;

	beforeEach(function () {
		london = new Airport('london');
		airport = new Airport('name');
		plane = new Plane;
	});

	it('should have a name', function() {
		expect(london.name).toEqual('london')
	});

	it('should be able to count the number of parked planes', function() {
		expect(airport.planeCount()).toEqual(0)
	});

	it('should let planes land', function() {
		airport.parks(plane)
		expect(airport.planeCount()).toEqual(1)
	});

	it('should let planes take off', function() {
		airport.parks(plane)
		expect(airport.planeCount()).toEqual(1)
		airport.releases(plane)
		expect(airport.planeCount()).toEqual(0)
	});

	it('should not let planes take off if bad weather', function() {
		expect(airport.weather("stormy")).toEqual("Takeoff is not allowed");
	});

	it('clears planes for takeoff if weather is good', function() {
		expect(airport.weather("clear")).toEqual("Fine for takeoff");
	});
});