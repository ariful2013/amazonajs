// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';

const app = express();

// const data = require('./data.js');
import data from './data';

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log('Server started at');
  console.log('http://localhost:5000');
});
