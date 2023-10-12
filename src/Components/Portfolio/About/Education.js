const Education = () => {
  return (
    <div className="education-card">
      <h1 className="education-heading">Education</h1>
      <div className="education-info">
        <div className="school-info">
          <h2>BINA NUSANTARA UNIVERSITY</h2>
          <p>Jakarta, Indonesia</p>
          <br />
          <p style={{ "font-weight": "900" }}>
            Computer Science
          </p>
          <p>Batch of 2025</p>
          {/* <p>CGPA: </p> */}
        </div>
        <div className="school-info">
          <h2>SMA Negeri 4 Singaraja</h2>
          <p>Singaraja, Bali</p>
          <br />
          <p>Batch of 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
