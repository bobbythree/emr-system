import patients from '../data/patients.json'

export default function ChartCard() {
  return (
    <div className="grid grid-cols-4 gap-2 place-items-center">
     {patients.map(patient => (
      <div key={patient.id} className="w-xs bg-secondary rounded-sm p-3">
          {patient.name}
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

