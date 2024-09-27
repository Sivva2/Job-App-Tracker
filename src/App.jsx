import "./global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

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
        <Route path="/joblist/:jobId" element={<EditJobItem />} />
        <Route path="/statistics/:usedId" element={<DashBoardStatistics />} />
        /* check if URL fits to our user Nav */
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
