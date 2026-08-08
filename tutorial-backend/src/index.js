import express from 'express';

const app = express();
const port = 3000;

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello Backend');
});

app.listen(port, () => {
  console.log("listening on port 3000");
});