import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chức năng gửi email, có thể sử dụng thư viện gửi email hoặc API backend
    alert("メッセンジを送りました");
  };

  return (
    <div className="contact-container">
      <h2>連絡方法 (Contact Information)</h2>

      {/* Thông tin liên lạc */}
      <ul className="contact-list">
        <li className="contact-item">
          <FaEnvelope />{" "}
          <span>
            電子メール 　:{" "}
            <a href="mailto:gam@example.com">ngogam262@gmai.com</a>
          </span>
        </li>
        <li className="contact-item">
          <FaPhone /> <span>電話番号　　: 07064708910</span>
        </li>
        <li className="contact-item">
          <FaFacebook />{" "}
          <span>
            フェスブック:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100006580576923"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ngô T.Gấm
            </a>
          </span>
        </li>
      </ul>

      {/* Form gửi tin nhắn */}
      <div className="contact-form">
        <h3>打ち合わせの内容を書いてください:</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>あなたのメール　:　</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>メッセンジの内容:　</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                width: "100%",
                height: "200px", // Điều chỉnh chiều cao tại đây
                padding: "20px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
