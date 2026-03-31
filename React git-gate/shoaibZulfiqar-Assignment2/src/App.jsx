import StudentCard from './StudentCard';

function App() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-5 fw-bold">Student ID Card System</h2>
      
      <div className="d-flex flex-wrap justify-content-center">
        {/* Teen alag students ka data (Props) */}
        <StudentCard name="Ali" course="React JS" rollNo="101" />
        <StudentCard name="Sara" course="Python" rollNo="102" />
        <StudentCard name="Zain" course="UI/UX Design" rollNo="103" />
      </div>
    </div>
  );
}

export default App;
