import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobListItem from "./components/JobListItem";
import DetailJobItem from "./components/DetailJobItem";
import EditJobItem from "./components/EditJobItem";
import DashboardStats from "./components/DashboardStats";
import "./styles/global.css";

function App() {
  return (
    /* <>Ready to code with Mantine, a router would be nice in there 😺</>

  /* Nav */

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joblist" element={<JobListItem />} />
        <Route path="/joblist/:jobId" element={<DetailJobItem />} />
        <Route path="/joblist/editS/:jobId/" element={<EditJobItem />} />
        <Route path="/stats/:usedId" element={<DashboardStats />} />
        /* check if URL fits to our user Nav */
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
