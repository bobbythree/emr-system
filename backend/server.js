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
let result = [];
app.post('/api/test-data', (req, res) => {
  const { patientName, dob, admissionDate, diagnosis } = req.body;
  if (!patientName || !dob || !admissionDate || !diagnosis) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  result.push(req.body);

  res.status(201).json({ message: 'Test-data recorded successfully!', data: req.body });
})

app.get('/api/test-data', (req, res) => {
  res.json(result);
})

app.delete('/api/test-data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = result.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({msg: `Post with id of ${id} not found`})
  }

  result = result.filter((post) => post.id !== id)
  res.status(200).json(result);
});


app.listen(port, () => {
    console.log(`server running on port: ${port}`)
  })
