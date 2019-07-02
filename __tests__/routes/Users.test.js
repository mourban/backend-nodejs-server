//const supertest = require("supertest");
const request = require('supertest');
const users = require('../../routes/Users')

//var server = supertest.agent("http://localhost:5000");

describe('Pruebas automáticas de /user route', function() {

    let data = {
        //no id_user
        "first_name": "first_name",
        "last_name": "last_name",
        "email": "email",
        "password": "password"
    }
    it('/user/add status', function(done) {
        request(users)
        .get('/list')
        .then((response) => {
            expect(response, done)
        });
    });

    /*it('/user/login status', function (done) {
        return request(users)
        .post('/login')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
    });

    it('/user/list status', function(done) {
        return request(users)
        .get('/list')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
    });

    it('/user/:id status', function(done) {
        return request(users)
        .get('/:id')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
    });

    it('/user/update/:id status', function(done) {
        return request(users)
        .put('/update/:id')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
    });

    it('/user/delete/:id status', function(done) {
        return request(users)
        .delete('/delete/:id')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
    });*/

});