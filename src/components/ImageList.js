import React, { useState, useEffect } from "react";
import img1 from "./assets/images/image1.jpg";
import img2 from "./assets/images/image2.jpg";
import img3 from "./assets/images/image3.JPG";
import img4 from "./assets/images/image4.png";
import "./ImageList.css"; // Import CSS để áp dụng hiệu ứng

const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },
];

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Đổi ảnh mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Thay đổi ảnh sau 3 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="slide-container">
      <div
        className="image-slide"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Chuyển ảnh theo chỉ số
          transition: "transform 1s ease-in-out", // Hiệu ứng chuyển động
        }}
      >
        {images.map((image) => (
          <div className="image-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="image-element" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
