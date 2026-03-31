function StudentCard({ name, course, rollNo }) {
  return (
    <div className="card shadow m-3" style={{ width: "18rem", borderRadius: "15px" }}>
      <div className="card-body text-center">
        <div className="bg-primary text-white rounded-circle d-inline-block p-3 mb-3">
          <i className="bi bi-person"></i> ID
        </div>
        <h5 className="card-title fw-bold">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{course}</h6>
        <p className="card-text border-top pt-2">Roll No: <b>{rollNo}</b></p>
        <button className="btn btn-primary w-100 mt-2">Print ID Card</button>
      </div>
    </div>
  );
}

export default StudentCard;
