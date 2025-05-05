const express = require('express');
const app = express;
const PORT = 3000;

app.request(express.json());

app.get('/' (req, res) => {
    res.send({message: 'Hej!'});
});,