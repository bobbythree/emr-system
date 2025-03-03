
export default function AdmissionPage() {
  return (
    <>
    <div className="text-2xl text-base-200 p-3">Admission Form</div>

    <fieldset className="fieldset w-xs bg-base-300  border border-base-300 p-4 ml-3 rounded-box">
      <label className="fieldset-label text-gray-700">Patient Name</label>
      <input type="text" className="input" placeholder="Enter name" />
  
      <label className="fieldset-label text-gray-700">DOB</label>
      <input type="date" className="input" placeholder="my-awesome-page" />
  
      <label className="fieldset-label text-gray-700">Admission Date</label>
      <input type="date" className="input" placeholder="Name" />

      <label className="fieldset-label text-gray-700">Diagnosis</label>
      <input type="text" className="input" placeholder="Enter Diagnosis" />

      <label className="fieldset-label text-gray-700">Precautions</label>
      <input type="text" className="input" placeholder="Enter Precautions" />

    </fieldset>
    </>
  )
}

