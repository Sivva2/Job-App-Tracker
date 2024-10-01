import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import JobForm from "./components/JobForm";

import Homepage from "./pages/Hompage";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="/home" element={<Homepage />} />
        {/*  check if URL fits to our user Nav */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
