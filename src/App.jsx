import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
import JobListItem from "./components/JobListItem";
import DetailJobItem from "./components/DetailJobItem";
import EditJobItem from "./components/EditJobItem";
import DashboardStats from "./components/DashboardStats";
import "./styles/global.css";
=======
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
>>>>>>> 19673aa3ccdb7f0640a4a897e776662e9cdc3d2c

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/joblist" element={<JobListItem />} />
        <Route path="/joblist/:jobId" element={<DetailJobItem />} />
        <Route path="/joblist/editS/:jobId/" element={<EditJobItem />} />
        <Route path="/stats/:usedId" element={<DashboardStats />} />
=======
>>>>>>> 19673aa3ccdb7f0640a4a897e776662e9cdc3d2c
        /* check if URL fits to our user Nav */
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
