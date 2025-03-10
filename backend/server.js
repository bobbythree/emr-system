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

//post request
let data = [];
app.post('/api/test-data', (req, res) => {
  const { patientName, dob, admissionDate, diagnosis } = req.body;
  if (!patientName || !dob || !admissionDate || !diagnosis) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  data.push(req.body);

  res.status(201).json({ message: 'Test-data recorded successfully!', data: req.body });
})

app.get('/api/test-data', (req, res) => {
  res.json(data);
})

app.delete('/api/test-data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({msg: `Post with id of ${id} not found`})
  }

  data = data.filter((post) => post.id !== id)
  res.status(200).json(data);
});


app.listen(port, () => {
    console.log(`server running on port: ${port}`)
  })
