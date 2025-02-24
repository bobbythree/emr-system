
export default function Admission() {
  return (
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Admission Form</legend>
  
      <label className="fieldset-label">Patient Name</label>
      <input type="text" className="input" placeholder="Enter name" />
  
      <label className="fieldset-label">DOB</label>
      <input type="date" className="input" placeholder="my-awesome-page" />
  
      <label className="fieldset-label">Admission Date</label>
      <input type="date" className="input" placeholder="Name" />

      <label className="fieldset-label">Diagnosis</label>
      <input type="text" className="input" placeholder="Enter Diagnosis" />
    </fieldset>
  )
}

