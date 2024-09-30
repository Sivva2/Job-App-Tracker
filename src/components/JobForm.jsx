import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Paper,
  Title,
  Select,
} from "@mantine/core";
import { DatesProvider, DatePicker } from "@mantine/dates";
import dayjs from "dayjs"; // For date formatting

const JobForm = () => {
  const [formValues, setFormValues] = useState({
    company: "",
    jobTitle: "",
    description: "",
    dateApplied: null,
    status: "",
    contact: "",
    jobLink: "",
    notes: "",
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle date change for DatePicker
  const handleDateChange = (date) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      dateApplied: date,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const method = formValues.id ? "put" : "post"; // Determine whether to update or create
      const url = formValues.id
        ? `http://localhost:4000/jobs/${formValues.id}`
        : `http://localhost:4000/jobs`;

      const formattedData = {
        ...formValues,
        dateApplied: formValues.dateApplied
          ? dayjs(formValues.dateApplied).format("YYYY-MM-DD")
          : null, // Ensure date is in correct format
      };

      const response = await axios({
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: formattedData,
      });

      const job = response.data;
      navigate(`/job/${job.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper shadow="md" radius="md" p="xl" withBorder>
      <Title order={2} mb="lg">
        Job Application Form
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Company"
          placeholder="Enter company name"
          name="company"
          value={formValues.company}
          onChange={handleChange}
          required
          mb="md"
        />

        <TextInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          value={formValues.jobTitle}
          onChange={handleChange}
          required
          mb="md"
        />

        <Textarea
          label="Job Description"
          placeholder="Describe the job position"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          autosize
          minRows={3}
          mb="md"
        />

        <DatesProvider
          settings={{
            locale: "fr",
            firstDayOfWeek: 0,
            weekendDays: [0],
            timezone: "UTC",
          }}
        >
          <DatePicker
            label="Date Applied"
            placeholder="Pick date"
            value={formValues.dateApplied}
            onChange={handleDateChange}
            required
            mb="md"
          />
        </DatesProvider>

        <TextInput
          label="Status"
          placeholder="Enter application status"
          name="status"
          value={formValues.status}
          onChange={handleChange}
          required
          mb="md"
        />

        <TextInput
          label="Contact"
          placeholder="Enter contact details"
          name="contact"
          value={formValues.contact}
          onChange={handleChange}
          required
          mb="md"
        />

        <TextInput
          label="Job Link"
          placeholder="Paste job link"
          name="jobLink"
          value={formValues.jobLink}
          onChange={handleChange}
          required
          mb="md"
        />

        <Textarea
          label="Notes"
          placeholder="Additional notes"
          name="notes"
          value={formValues.notes}
          onChange={handleChange}
          autosize
          minRows={2}
          mb="lg"
        />

        <Group position="right">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default JobForm;
