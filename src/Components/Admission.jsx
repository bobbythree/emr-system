import { useState } from 'react'
import FormInput from '../Components/FormInput.jsx'

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    patientName: '',
    dob: '',
    admissionDate: '',
    diagnosis: '',
    precautions: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch('http://127.0.0.1:5000/api/test-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('admission form submitted');
        setFormData({
          patientName: '',
          dob: '',
          admissionDate: '',
          diagnosis: '',
          precautions: '',
        });
      } else {
        console.error('Error submitting admission form', response.statusText);
      }
    } catch (error) {
      console.error(`Network Error, ${error}`);
    }
  }

  return (
    <>
      <div className="text-2xl text-base-200 p-3">Admission Form</div>

      <form id="form" onSubmit={handleSubmit}>
        <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-4 ml-3 rounded-box">
          <FormInput
            id="patientName"
            label="Patient Name"
            placeholder="Enter name"
            value={formData.patientName}
            onChange={handleChange}
          />
          <FormInput
            id="dob"
            label="DOB"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <FormInput
            id="admissionDate"
            label="Admission Date"
            type="date"
            value={formData.admissionDate}
            onChange={handleChange}
          />
          <FormInput
            id="diagnosis"
            label="Diagnosis"
            placeholder="Enter Diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
          />
          <FormInput
            id="precautions"
            label="Precautions"
            placeholder="Enter Precautions"
            value={formData.precautions}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </fieldset>
      </form>
    </>
  )
}

