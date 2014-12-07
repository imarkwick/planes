describe('Plane', function() {

	var plane, airport;

	beforeEach(function() {
		plane = new Plane();
		airport = new Airport();
	});

		it('should land at the airport', function() {
			plane.lands(airport);
			expect(plane.flying).toBe(false);
		});

		it('should take off from the airport', function() {
			plane.takeOff(airport);
			expect(plane.flying).toBe(true);
		});

});