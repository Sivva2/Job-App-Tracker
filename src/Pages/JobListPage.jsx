import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobListPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const fetchJob = async () => {
    try {
      const response = await axios.get(`http://localhost:4000//${jobId}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const remove = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000//${jobId}`);
      console.log("Item deleted:", response.data);
    } catch (error) {
      console.error("Error removing the item:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [jobId]);

  return (
    <div>
      <h1>Job Detail</h1>
      <button type="button" onClick={remove}>
        Delete
      </button>
    </div>
  );
};

export default JobListPage;
