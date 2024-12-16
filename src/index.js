import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"; // Nếu có file CSS để tùy chỉnh giao diện
import App from "./App"; // Đây là component chính của bạn


const root = ReactDOM.createRoot(document.getElementById("root")); // Tạo root
root.render(<App />); 

