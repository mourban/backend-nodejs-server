const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server');
var supertest = require("supertest");

chai.use(chaiHttp);
chai.should();
var server = supertest.agent("http://localhost:5000");

describe('Pruebas automáticas básicas de /user route para comprobar los endpoints', () => {

    let dataUser = {
        //no id_user
        "first_name": "first_name",
        "last_name": "last_name",
        "email": "email",
        "password": "password"
    }
    it('/user/add status', function(done) {
        server
        .post('/user/add')
        .send(dataUser)
        .expect("Content-type",/json/)
        .expect(200) // Esta es la respuesta esperada
        .end(function(err,res){
            // La respuesta debe ser "200" lo que indica que el endpoint esta activo
            res.should.have.status(200);
            done();
        });
    });

    it("/user/list status", function(done){
        server
        .get("/user/list")
        .expect("Content-type",/json/)
        .expect(200) // Esta es la respuesta esperada
        .end(function(err,res){
            // La respuesta debe ser "200" lo que indica que el endpoint esta activo
            res.should.have.status(200);
            done();
        });
    });

    let id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72953';
    it("/user/:id status", function(done){
        server
        .get(`/user/${id_user}`)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un usuario con id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

    let dataLogin = {
        "email": "email",
        "password": "password"
    }
    it('/user/login status', function (done) {
        server
        .post('/user/login')
        .send(dataLogin)
        .expect("Content-type",/json/)
        .expect(200) // Esta es la respuesta esperada
        .end(function(err,res){
            // La respuesta debe ser "200" lo que indica que el endpoint esta activo
            res.should.have.status(200);
            done();
        });
    });

    it("/user/update/:id status", function(done){
        server
        .put(`/user/update/${id_user}`)
        .send(dataUser)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un usuario con id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

    it("/user/delete/:id status", function(done){
        server
        .delete(`/user/delete/${id_user}`)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un usuario con id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

});