import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="details-card">
        <h2>Student Details</h2>
        <p><strong>ID:</strong> {id}</p>

        <button onClick={() => navigate(-1)} className="btn">
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;