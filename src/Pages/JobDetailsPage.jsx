import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchJob = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/${jobId}`);
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const remove = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/${jobId}`);
      console.log("Item deleted:", response.data);
      navigate("/jobs");
    } catch (error) {
      console.error("Error removing the item:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [jobId]);

  if (loading) return <p>Loading job details...</p>;

  return (
    <>
      <h2>Company: {job.company}</h2>
      <p>Job title: {job.jobTitle}</p>
      <p>description: {job.description}</p>
      <p>dateApplied: {job.dateApplied}</p>
      <p>status: {job.status}</p>
      <p>contact: {job.contact}</p>
      <p>jobLink:{job.jobLink}</p>
      <p> notes:{job.notes}</p>
      <button type="button" onClick={remove}>
        Delete
      </button>
      <Link to={`/job/${jobId}/Update`}>
        <button type="button">Update</button>
      </Link>
    </>
  );
};

export default JobDetailPage;
