import React, { useState, useEffect } from "react";
import { FaBirthdayCake } from "react-icons/fa"; // Icon cho tuổi
import "./ImageList.css";

function Introduction() {
  // State lưu chỉ số ảnh hiện tại cho từng danh sách
  const [currentImageIndex, setCurrentImageIndex] = useState({
    name: 0,
    hometown: 0,
    university: 0,
  });

  // Dữ liệu ảnh cho từng mục
  const images = {
    name: ["/assets/images/image1.jpg", "/assets/images/image4.png"],
    hometown: [
      "/hometown/hometown1.jpg",
      "/hometown/hometown2.jpg",
      "/hometown/hometown3.jpg",
      "/hometown/hometown4.jpg",
      "/hometown/hometown5.jpg",
      "/hometown/hometown6.jpg",
      "/hometown/hometown7.jpg",
      "/hometown/hometown8.jpg",
    ],
    university: [
      "/university/university1.jpg",
      "/university/university2.jpg",
      "/university/university3.jpg",
      "/university/university4.jpg",
    ],
  };

  // Hàm cập nhật chỉ số ảnh
  const updateImageIndex = (key) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [key]: (prevState[key] + 1) % images[key].length, // Vòng lặp ảnh
    }));
  };

  // Tạo hiệu ứng slide cho từng danh sách ảnh
  useEffect(() => {
    const nameInterval = setInterval(() => updateImageIndex("name"), 3000);
    const hometownInterval = setInterval(
      () => updateImageIndex("hometown"),
      5000
    );
    const universityInterval = setInterval(
      () => updateImageIndex("university"),
      4000
    );

    // Cleanup khi component bị unmount
    return () => {
      clearInterval(nameInterval);
      clearInterval(hometownInterval);
      clearInterval(universityInterval);
    };
  }, []);

  return (
    <div className="introduction-container">
      <h1>自己紹介</h1>

      {/* Danh sách thông tin */}
      <ul className="info-list">
        {/* Thông tin về tên */}
        <li className="info-item">
          <h3>名前: NGO THI GAM</h3>
          <h4>ゴー・ティ・ガム</h4>
          <h4>
            <FaBirthdayCake /> 年齢: 27 tuổi
          </h4>
          <h5>
            私は明るくて楽観的な性格です。日常生活でも仕事の中でも、いつも楽観的でリラックスした気持ちを保つように心がけています。
            <br />
            なぜなら、心の状態が良ければ、すべてがうまくいくと思うからです。たとえ困難な問題に直面したとしても、楽観的で冷静でいることで、
            <br />
            最善の解決策を早く見つけられると信じています。
          </h5>
          <h5>
            仕事に関してですが、ITエンジニアとして、常にITに関する幅広い知識を身につけたいと考えています。
            <br />
            プログラミング言語だけでなく、データベース、テスト、製品レビューなどにも関心を持ち、学んでいきたいと思っています。
          </h5>
          <img
            src={images.name[currentImageIndex.name]} // Chọn ảnh từ mảng
            alt="Profile"
            className="info-image"
          />
        </li>

        {/* Thông tin về quê quán */}
        <li className="info-item">
          <h3>出身地: Nam Dinh, Viet Nam</h3>
          <h5>
            ナムディンは、ベトナム北部にある小さな都市です。ここは大きくて美しい教会で有名で、多くの若者に人気があります。<br/>
            また、ネムナムやフォーボーなどの名物料理もあります。
          </h5>
          <img
            src={images.hometown[currentImageIndex.hometown]} // Chọn ảnh từ mảng
            alt="Hometown"
            className="info-image"
          />
        </li>

        {/* Thông tin về trường đại học */}
        <li className="info-item">
          <h3>大学: タイグエン情報技術大学</h3>
          <h4>2021年に卒業しました。専門は情報技術です。</h4>
          <img
            src={images.university[currentImageIndex.university]} // Chọn ảnh từ mảng
            alt="University"
            className="info-image"
          />
        </li>
      </ul>
    </div>
  );
}

export default Introduction;
