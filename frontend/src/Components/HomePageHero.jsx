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
            This Electronic Medical Records System (EMR) is a work in progress. It will eventually be a fully functioning EMR. So far the user can enter patient information on the Admission page which will be displayed on patient chart thumbnails on the All Charts page. 
          </p>
            <button onClick={handleClick} className="btn btn-primary text-base-100">View source code</button>
        </div>
      </div>
    </div>
  )
}

