import { useState, useEffect } from 'react'
import pic from '../assets/patient.png'

export default function ChartCard() {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'http://127.0.0.1:3000/api/thumbnail'

  useEffect(() => {
    async function getPatients() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error;
        const data = await response.json();
        setPatients(data.thumbnail_data)
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false)
      }
    }
    getPatients();
  }, []);
  
  if (isLoading) return <p>...loading</p>;
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="flex flex-wrap gap-2 p-3">
      {patients.map(patient => (
        <div className="bg-secondary p-3 rounded-md w-xs" key={patient.id}>
          <img src={pic} alt="patient photo" />
          <h3><strong>Patient Name: </strong>{patient.name}</h3>
          <p><strong>DOB: </strong>{patient.dob}</p>
          <p><strong>Admission Date: </strong>{patient.admit_date}</p>
          <p><strong>Diagnosis: </strong>{patient.diagnosis}</p>
          <p><strong>Precautions: </strong>{patient.precautions}</p>
          <p><strong>Allergies: </strong>{patient.allergies}</p>
        </div>
      ))} 
    </div>
  )
}

