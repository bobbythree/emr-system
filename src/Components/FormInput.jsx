export default function FormInput({
  id, label, type ='text', placeholder = '', value, onChange }) {
  return (
    <>
      <label htmlFor={id} className="fieldset-label text-gray-700">{label}</label>
      <input
        type={type}
        className="input"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

