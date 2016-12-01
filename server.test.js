const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server testing',() => {
	
	describe('GET /', () => {
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

		it('should include "stack"', (done) => {
			request(app)
				.get('/')		
				.expect((res) => {
					expect(res.body).toInclude({
						stack: 'Mocha, expect, supertest'
					});
				})		
				.end(done);	
		});
	});	

	describe('GET /users', () => {
		it('should return an array of objects', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect([{
				user: 'admin',
				status: 'administrator'
			}, {
				user: 'guest',
				status: 'guest'
			}, {
				user: 'super',
				status: 'superuser'
			}])
				.end(done);
		});

		it('should include user "admin"', (done) => {
			request(app)
				.get('/users')
				.expect((res) => {
					expect(res.body).toInclude({
						user: 'admin',
						status: 'administrator'
					});
				})
				.end(done);
		});
	});

});

