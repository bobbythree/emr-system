export default function HomePageHero() {
  const handleClick = () => {
    window.open('https://github.com/bobbythree/emr-system', '_blank', 'nooperner, noreferrer');
  }

  return (
    <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">EMR</h1>
          <p className="py-6">
            This is a mock Electronic Medical Records System (EMR) work-in-progress for education purposes only. So far the user can enter fake patient information on the Admission page which will be displayed as patient chart thumbnails on the All Charts page. This is NOT a real EMR and contains no actual PHI or patient data. 
          </p>
            <button onClick={handleClick} className="btn btn-primary text-base-100">View source code</button>
        </div>
      </div>
    </div>
  )
}

