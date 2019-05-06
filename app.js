const express = require('express')
const request = require('request');
const app = express()
const aux = require("./aux.js")
//puerto variable - heroku
const port = process.env.PORT || 3000

//funcion get
app.get("/students/:id", (req, res) => {
  // El tipo de data sera JSON
  res.setHeader('Content-Type', 'application/json')
	// Este header es necesario para prevenir errores relacionados con CORS
	res.setHeader('Access-Control-Allow-Origin',  "*")
    var id = req.params.id;
    console.log(id);
    aux.estudiante(id, alumno => {
      console.log(alumno);
      res.send({
        id: alumno.id,
        fullname: alumno.fullname
      });
    });
  });
   
app.get('*', function(req, res) {
  res.send({
    error: 'Esto funciona'
  })
})

//metodo listen
app.listen(port, function() {
    console.log('up and running')
  })

