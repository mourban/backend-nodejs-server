const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/add', (req, res) => {
    const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash;
                User.create(userData)
                .then(user => {
                    res.json({
                        status: user.email + " registrado"
                    })
                })
                .catch(error => {
                    res.send("error: " + error);
                })
            })
        }else{
            res.json({
                error: "Usuario ya existe"
            })
        }
    })
    .catch(error => {
        res.send("error: " + error)
    })
});

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (user){
            if (bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
                res.send(token);
            }else{
                res.status(400).json({error: "Error de autenticación, verifique su contraseña"});
            }
        }else{
            res.status(400).json({error: "Usuario no existe, debe registrarse"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    })
});

users.get('/list', (req, res) => {
    User.findAll()
    .then(userList => {
        res.send(userList);
    })
    .catch(error => {
        res.status(400).json({ error: error });
    })
});

users.get('/:id', (req, res) => {
    var userId = req.params.id;
    User.findOne({
        where: {
            id_user: userId
        }
    })
    .then(user => {
        if (user){
            res.send(user);
        }else{
            res.status(400).json({error: "Usuario no existe"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    })
});

users.put('/update/:id', (req, res) => {

    User.findOne({
        where: {
            id_user: req.params.id
        }
    })
    .then(user => {
        if (user){

            let hashPassword = (password) => {
                return bcrypt.hashSync(password, 10, null);
            }
            
            const updatedValues = {
                first_name: req.body.first_name? req.body.first_name : user.first_name,
                last_name: req.body.last_name? req.body.last_name : user.last_name,
                email: req.body.email? req.body.email : user.email,
                password: req.body.password? hashPassword(req.body.password) : user.password,
                created: new Date()
            }
            console.log(updatedValues);
    
            user.update(updatedValues);
            res.json({
                status: user.email + " actualizado"
            });

        }else{
            res.status(400).json({error: "Usuario no existe"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    });

});

users.delete('/delete/:id', (req, res) => {

    User.findOne({
        where: {
            id_user: req.params.id
        }
    })
    .then(user => {
        if (user){
            user.destroy();
            res.json({
                status: user.email + " eliminado"
            });
        }else{
            res.status(400).json({error: "Usuario no existe"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    });

});

module.exports = users;