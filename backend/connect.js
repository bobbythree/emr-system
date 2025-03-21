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


export { db }
