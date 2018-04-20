const moneyManager = require('../routes/moneyManager');
const app = require('../app');
const request = require('supertest');

describe('#addIncome', ()=>{
	it('should add income', done => {
		request(app).post("/mon")
	})
})