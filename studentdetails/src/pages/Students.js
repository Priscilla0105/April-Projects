import data from "../data/students.json";
import { Link } from "react-router-dom";

function Students() {
  return (
    <div className="page-center">
      <h2>Students List</h2>

      <div className="students-container">
        {data.map((student) => (
          <div className="card" key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>

            <Link to={`/students/${student.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;