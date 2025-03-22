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
  const sql = `INSERT INTO thumbnail_data(
  patient_name,
  patient_dob,
  patient_admit_date,
  patient_diagnosis,
  patient_precautions,
  patient_allergies) VALUES(?, ?, ?, ?, ?, ?)`;
  let newId;
  try {
    db.run(sql, [
      req.body.name,
      req.body.dob,
      req.body.admissionDate,
      req.body.diagnosis,
      req.body.precautions,
      req.body.allergies], function(err) {
      if (err) throw err;
      newId = this.lastID; //provides auto increment id
      res.status(201);
      let data = { status: 201, message: `Patient information ${newId} saved.` }
      let content = JSON.stringify(data);
      res.send(content);
    })
  } catch (err) {
    console.log(err.message);
    res.status(468);
    res.send(`{"code": 468, "status": "${err.message}"}`);
  }
});

app.get('/api/thumbnail', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM thumbnail_data';
  const data = {thumbnail_data: []};
  try {
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err; //let catch handle it
      }
      rows.forEach(row => {
        //build custom object
        data.thumbnail_data.push({
          id: row.patient_id,
          name: row.patient_name,
          dob: row.patient_dob,
          admit_date: row.patient_admit_date,
          diagnosis: row.patient_diagnosis,
          precautions:  row.patient_precautions,
          allergies: row.patient_allergies
        });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code": 467, "status": "${err.message}"}`);
  }
});



app.listen(port, (err) => {
  if (err) console.log('ERROR:', err.message)
  console.log(`app listening on local host port ${port}`)
});
