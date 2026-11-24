const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.type('html').send('<h1>Hello from Node + Vercel! Auto-deployed modified version 1</h1>');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'API working!' });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
  });
}

module.exports = app;
