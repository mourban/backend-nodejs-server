const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server');
var supertest = require("supertest");

chai.use(chaiHttp);
chai.should();
var server = supertest.agent("http://localhost:5000");

describe('Pruebas automáticas básicas de /task route para comprobar los endpoints', () => {

    let dataTask = {
        //no id_user
        "description": "description",
        "id_user": "703aa0f0-9f3e-11e9-81e2-b71d9dc4558b"
    }
    it('/task/add status', function(done) {
        server
        .post('/task/add')
        .send(dataTask)
        .expect("Content-type",/json/)
        .expect(200) // Esta es la respuesta esperada
        .end(function(err,res){
            // La respuesta debe ser "200" lo que indica que el endpoint esta activo
            res.should.have.status(200);
            done();
        });
    });

    let id_user = '703aa0f0-9f3e-11e9-81e2-b71d9dc4558b';
    it("/task/list/:userId status", function(done){
        server
        .get(`/task/list/${id_user}`)
        .expect("Content-type",/json/)
        .expect(200) // Esta es la respuesta esperada
        .end(function(err,res){
            // La respuesta debe ser "200" lo que indica que el endpoint esta activo
            res.should.have.status(200);
            done();
        });
    });

    let id_task = 'e1c1b630-9d1a-11e9-b10f-3baad5c72953';
    it("/task/:id status", function(done){
        server
        .get(`/task/${id_task}`)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un task con id_task = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

    it("/task/update/:id status", function(done){
        server
        .put(`/task/update/${id_task}`)
        .send(dataTask)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un task con id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

    it("/task/delete/:id status", function(done){
        server
        .delete(`/task/delete/${id_task}`)
        .expect("Content-type",/json/)
        .expect(400) // Esta es la respuesta esperada debido a que puede que no exista un task con id_user = 'e1c1b630-9d1a-11e9-b10f-3baad5c72977'
        .end(function(err,res){
            // La respuesta debe ser "400" lo que indica que el endpoint esta activo
            res.should.have.status(400);
            done();
        });
    });

});