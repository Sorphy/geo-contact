import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AddContact from "./pages/AddContactPage";
import Dashboard from "./pages/DashboardPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
