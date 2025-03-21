import patients from '../data/patients.json'

export default function ChartCard() {
  return (
    <div className="grid grid-cols-6 gap-2 p-3">
     {patients.map(patient => (
      <div key={patient.id} className="bg-secondary rounded-sm p-3">
          <img src={patient.img} alt="patient photo" style={{width: '8rem'}} />
          <h3>Name: {patient.name}</h3>
          <p>DOB: {patient.dob}</p>
          <p>Admit Date: {patient.admitDate}</p>
          <p>Diagnosis: {patient.diagnosis}</p>
          <p>Precautions: {patient.precautions}</p>
      </div>
     ))} 
    </div>
  )
}

