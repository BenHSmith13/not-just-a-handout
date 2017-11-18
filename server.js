const express = require('express')
const MongoDatabase = new (require('./server/database'));
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/contributions', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  MongoDatabase.getContributions(req.query.userId, (err, doc) => {
    res.send(JSON.stringify(doc));
  });
});

app.post('/contributions', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  MongoDatabase.createContribution(req.body, () => {
    res.send(JSON.stringify({ status: 'ok' }));
  });
})

app.post('/users', (req, res) => {
  MongoDatabase.createUser(req.body, (err, doc) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(doc));
  });
});

app.get('/users', (req, res) => {
  MongoDatabase.getUser(req.query.email, 'email', (err, doc) => {
    res.send(JSON.stringify(doc))
  });
});

app.post('/resources', (req, res) => {
  MongoDatabase.createResource(req.body, (err, doc) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(doc));
  });
});

app.get('/resources', (req, res) => {
  MongoDatabase.getResources((err, doc) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(doc));
  });
})

app.listen('8000', () => console.log('server running on 8000'))