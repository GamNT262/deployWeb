import React, { useState, useEffect } from "react";
import { FaBirthdayCake } from "react-icons/fa"; // Icon cho tuổi
import "./ImageList.css";
import "./Introduction.css";
import Hometown from "./Hometown";
import Hobbies from "./Hobbies";

function Introduction() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    name: 0,
    hometown: 0,
    hobbies: 0,
  });

  const [selectedCategory, setSelectedCategory] = useState("name");

  const images = {
    name: [
      "/assets/images/image1.jpg",
      "/assets/images/image4.png",
      "/assets/images/image6.png",
    ],
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
    hobbies: [
      "/hobbies/travel1.jpg",
      "/hobbies/travel2.jpg",
      "/hobbies/travel3.jpg",
      "/hobbies/travel4.jpg",
      "/hobbies/travel5.jpg",
      "/hobbies/image1.jpg",
      "/hobbies/image2.jpg",
      "/hobbies/image3.jpg",
      "/hobbies/image4.jpg",
    ],
  };

  const updateImageIndex = (key) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [key]: (prevState[key] + 1) % images[key].length,
    }));
  };

  useEffect(() => {
    const nameInterval = setInterval(() => updateImageIndex("name"), 3000);
    const hometownInterval = setInterval(
      () => updateImageIndex("hometown"),
      5000
    );
    const hobbiesInterval = setInterval(
      () => updateImageIndex("hobbies"),
      4000
    );

    return () => {
      clearInterval(nameInterval);
      clearInterval(hometownInterval);
      clearInterval(hobbiesInterval);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="introduction-container"
      style={{
        backgroundImage: "url('/assets/images/image5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div className="category-selector">
        <button onClick={() => handleCategorySelect("name")}>個人の情報</button>
        <button onClick={() => handleCategorySelect("hometown")}>出身</button>
        <button onClick={() => handleCategorySelect("hobbies")}>趣味</button>
      </div>

      <div className="content-column">
        {selectedCategory === "name" && (
          <ul className="info-list">
            <li className="info-item">
              <div className="image-column">
                <img
                  src={images.name[currentImageIndex.name]}
                  alt="Profile"
                  className="info-image"
                />
              </div>
              <div className="content-column">
                <h1>名前: NGO THI GAM</h1>
                <h3>ゴー・ティ・ガム</h3>
                <h3>年齢: 27歳</h3>
                <h3>職業: ITエンジニア</h3>
                <h4>
                  私は明るくて楽観的な性格です。日常生活でも仕事の中でも、いつも楽観的でリラックスした気持ちを保つように心がけています。
                  <br />
                  なぜなら、心の状態が良ければ、すべてがうまくいくと思うからです。たとえ困難な問題に直面したとしても、楽観的で冷静でいることで、
                  <br />
                  最善の解決策を早く見つけられると信じています。
                </h4>
                <h4>
                  仕事に関してですが、ITエンジニアとして、常にITに関する幅広い知識を身につけたいと考えています。
                  <br />
                  プログラミング言語だけでなく、データベース、テスト、製品レビューなどにも関心を持ち、学んでいきたいと思っています。
                </h4>
              </div>
            </li>
          </ul>
        )}

        {selectedCategory === "hometown" && (
          <Hometown images={images} currentImageIndex={currentImageIndex} />
        )}

        {selectedCategory === "hobbies" && (
          <Hobbies images={images} currentImageIndex={currentImageIndex} />
        )}
      </div>
    </div>
  );
}

export default Introduction;
