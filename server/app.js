const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const PORT = 5000;
const cors = require('cors');

require('dotenv').config();
require('dotenv').load();

const router = require('./api/index');


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({ limit: '50mb' }));

app.use(cors());
app.use('/api', router);
// app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../app/static/index.html'));
// });

app.use(express.static(path.join(__dirname, '../app')));

app.listen(PORT, (err) => {
  if (err) { console.log('There was an error connecting to the server', err); }
  else { console.log('You have connected to the server on PORT: ', PORT); }
});

module.exports = app;