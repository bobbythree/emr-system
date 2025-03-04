import express from 'express'
import sqlite3 from 'better-sqlite3'
import cors from 'cors'

const app = express();
const port = 5000;
const db = new sqlite3('patient_data.db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('this is the root of the API')
})

app.post('/api/test-data', (req, res) => {
  
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
  })
