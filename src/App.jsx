import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import JobForm from "./components/JobForm";
import UpdateJob from "./Pages/UpdateJob";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<JobForm />} />
        /* check if URL fits to our user Nav */
        <Route path="*" element={<ErrorPage />} />
        <Route path="/job/${jobId}/Update" element={<UpdateJob />} />
      </Routes>
    </div>
  );
}

export default App;
