import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        /* check if URL fits to our user Nav */
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
