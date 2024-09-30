import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobForm = () => {
  const [formValues, setFormValues] = useState({
    company: "",
    jobTitle: "",
    description: "",
    dateApplied: "",
    status: "",
    contact: "",
    jobLink: "",
    notes: "",
  });

  const navigate = useNavigate();

  // Handle form input changes //
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission //
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const method = formValues.id ? "put" : "post"; // Determine whether to update or create //
      const url = formValues.id
        ? `http://localhost:4000/jobs/${formValues.id}`
        : `http://localhost:4000/jobs`;

      const response = await axios({
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: formValues,
      });

      const job = response.data;
      navigate(`http://localhost:4000//job/${job.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <input
          name="company"
          value={formValues.company}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Job Title:
        <input
          name="jobTitle"
          value={formValues.jobTitle}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Date Applied:
        <input
          name="dateApplied"
          type="date"
          value={formValues.dateApplied}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Status:
        <input
          name="status"
          value={formValues.status}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact:
        <input
          name="contact"
          value={formValues.contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Job Link:
        <input
          name="jobLink"
          value={formValues.jobLink}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Notes:
        <input name="notes" value={formValues.notes} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default JobForm;
