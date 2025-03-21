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
