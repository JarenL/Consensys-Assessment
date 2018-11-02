const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/consensys', (req, res) => {
  const fileStream = require('fs');
  let rawdata = fileStream.readFileSync('data.json');
  let data = JSON.parse(rawdata);
  res.send({ data: data });
});