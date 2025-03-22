import sqlite3 from 'sqlite3'

const sql3 = sqlite3.verbose();

const db = new sql3.Database('./patient_data.db', sqlite3.OPEN_READWRITE, connected);

function connected(err) {
  if (err) {
    console.log(err.message)
    return;
  }
  console.log('created db or db already exists')
}

let sql = `CREATE TABLE IF NOT EXISTS thumbnail_data(
  patient_id INTEGER PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_dob TEXT NOT NULL,
  patient_admit_date TEXT NOT NULL,
  patient_diagnosis TEXT NOT NULL,
  patient_precautions TEXT NOT NULL,
  patient_allergies TEXT NOT NULL
)`;

db.run(sql, [], (err) => {
  if (err) {
    console.log('error creating thumbnail_data table.')
  }
  console.log('created table')
});


export { db }
