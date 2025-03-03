import express from 'express'
import sqlite3 from 'better-sqlite3'
import cors from 'cors'

const app = express();
const port = 5000;
const db = new sqlite3('patient_data');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
  })
