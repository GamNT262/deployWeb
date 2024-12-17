import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import các icon
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Contact from "./components/Contacts";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Vùng bên trái: Thanh điều hướng */}
        <header className="header">
          <h2>自己PR</h2>
        </header>
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/home">ホーム</Link>
            </li>
            <li>
              <Link to="/introduction">自己紹介</Link>
            </li>
            <li>
              <Link to="/workexp">スキル</Link>
            </li>
            <li>
              <Link to="/contacts">連絡方法</Link>
            </li>
          </ul>
        </nav>
        {/* Định tuyến các Route */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Đường dẫn mặc định */}
            <Route path="/home" element={<Home />} />{" "}
          </Routes>
          <Routes>
            <Route path="/introduction" element={<Introduction />} />{" "}
            <Route path="/workexp" element={<WorkExperience />} />{" "}
            <Route path="/contacts" element={<Contact />} />{" "}
          </Routes>
        </div>
        {/* Footer */}
        <footer className="App-footer">
          <p>&copy; 2024 Ngo Thi Gam. </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
