// Home.js
import React from "react";
import "./Home.css";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import các icon

const Home = () => {
  return (
    <div
      className="main-content"
      style={{
        backgroundImage: "url('/assets/images/image5.jpg')", // Đường dẫn đến ảnh nền
        backgroundSize: "cover", // Đảm bảo ảnh nền phủ toàn bộ
        backgroundPosition: "center", // Căn giữa ảnh
        backgroundAttachment: "fixed", // Làm ảnh nền cố định khi cuộn trang
        minHeight: "100vh", // Đảm bảo ảnh nền chiếm ít nhất chiều cao của màn hình
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Căn giữa nội dung
        alignItems: "center", // Căn giữa nội dung
        color: "Black", // Đảm bảo chữ có thể đọc rõ trên nền
        textAlign: "center", // Căn chỉnh text
      }}
    >
      {/* Hình ảnh intro */}
      <div className="intro-image">
        <img
          src="/assets/images/image1.jpg"
          alt="Profile"
          style={{
            borderRadius: "50%", // Làm tròn ảnh
            width: "300px", // Chiều rộng ảnh
            height: "300px", // Chiều cao ảnh
            objectFit: "cover", // Đảm bảo ảnh không bị méo khi thay đổi kích thước
            border: "5px solid #ddd", // Thêm viền cho ảnh
          }}
        />
      </div>

      {/* Nội dung giới thiệu */}
      <div className="intro-text">
        <h1>NGO THI GAM</h1>
        <h2>ゴー・ティ・ガム</h2>
        <p>
          こんにちは！私はゴー・ティ・ガムと申します。
          <br />
          ITエンジニアで、コードを書くこと、問題を調査すること、そして新しいプログラミング言語を学ぶことが好きで、
          自分のスキルを向上させています。
          <br />
          よろしくお願い致します。
        </p>
        <p>
          <FaEnvelope /> ngogam262@gmail.com
        </p>
        <p>
          <FaPhone /> 07064708910
        </p>
      </div>
    </div>
  );
};

export default Home;
