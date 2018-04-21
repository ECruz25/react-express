const request = require('supertest');
const express = require('express');
const User = require('../models/User');
const app = require('../app');

describe('User Authentication', () => {
  it('should login', done => {
    request(app)
      .post('/app/users/login')
      .send({ username: 'user', password: 'password' })
      .expect(200)
      .end(done)
      .catch(err => {
        console.log(err);
      });
  });
});
