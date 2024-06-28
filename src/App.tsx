import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Support from "./Pages/Support";
import QuickMenu from "./Pages/QuickMenu";
import SignIn from "./Pages/Auth/SignIn";

function App() {
  return (
    <div className=" font-Poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/quickMenu" element={<QuickMenu />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
