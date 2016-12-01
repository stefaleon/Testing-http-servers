const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return an object', (done) => {
	request(app)
		.get('/')
		.expect(200)
		.expect({
		title: 'Simple Express Server',
		stack: 'Mocha, expect, supertest'
	})		
		.end(done);	
});

it('should include stack', (done) => {
	request(app)
		.get('/')		
		.expect((res) => {
			expect(res.body).toInclude({
				stack: 'Mocha, expect, supertest'
			});
		})		
		.end(done);	
});