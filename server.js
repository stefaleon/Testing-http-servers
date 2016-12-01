const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({
		title: 'Simple Express Server',
		stack: 'Mocha, expect, supertest'
	});
});

app.listen(3000, () => {
	console.log('server started on port 3000');
});

module.exports.app = app;