import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobForm from "../components/JobForm";

const UpdateJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOneJob = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/jobs/${jobId}`);
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching job data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOneJob();
  }, [jobId]);

  if (loading) return <p>Loading job data...</p>;

  return <JobForm job={job} />;
};

export default UpdateJob;
