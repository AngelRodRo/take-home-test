const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

const PORT = 3001;

app.use(cors());

app.get('/', (_, res) => {
  res.send('Hello World!');
});


http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
