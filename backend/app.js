import express from 'express'
import cors from 'cors'
import { db } from './connect.js'

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

//test route
app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello from API')
})

app.post('/api/thumbnail', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = `INSERT INTO friends(friend_name, friend_reason) VALUES(?, ?)`;
  let newId;
  try {
    db.run(sql, [req.body.name, req.body.reason], function(err) {
      if (err) throw err;
      newId = this.lastID; //provides auto increment id
      res.status(201);
      let data = { status: 201, message: `Friend ${newId} saved.` }
      let content = JSON.stringify(data);
      res.send(content);
    })
  } catch (err) {
    console.log(err.message);
    res.status(468);
    res.send(`{"code": 468, "status": "${err.message}"}`);
  }
});


app.listen(port, (err) => {
  if (err) console.log('ERROR:', err.message)
  console.log(`app listening on local host port ${port}`)
});
