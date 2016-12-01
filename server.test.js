const request = require('supertest');

var app = require('./server').app;

it('should return "Ohai!"', (done) => {
	request(app)
		.get('/')
		.expect(200)
		.expect('Ohai!')
		.end(done);	
});