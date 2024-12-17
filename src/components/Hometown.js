import React, { useState } from "react";

function Hometown() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Danh sách ảnh cho địa điểm nổi tiếng
  const famousPlacesImages = [
    "/hometown/hometown3.jpg",
    "/hometown/hometown5.jpg",
    "/hometown/hometown6.jpg",
  ];

  // Danh sách ảnh cho món ăn nổi tiếng
  const famousFoodImages = [
    "/hometown/hometown7.jpg",
    "/hometown/hometown8.jpg",
  ];

  return (
    <div className="hometown-container">
      <header>
        <h1>出身地: Nam Dinh, Viet Nam</h1>
      </header>

      <div className="image-section">
        <img
          src="/hometown/hometown1.jpg"
          alt="Nam Dinh"
          className="hometown-image"
        />
      </div>

      <div className="intro-boxes">
        <div className="box">
          <h3>有名な場所 (Famous Places)</h3>
          <p>
            ナムディンは、ベトナム北部にある小さな都市です。ここは大きくて美しい教会で有名で、多くの若者に人気があります。
            <br />
            The city is known for its large and beautiful churches, which
            attract many young people.
          </p>
          <div className="image-gallery">
            {famousPlacesImages.map((image, index) => (
              <img key={index} src={image} alt={`Famous Place ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="box">
          <h3>有名な料理 (Famous Food)</h3>
          <p>
            ナムディンは、ベトナム北部にある小さな都市です。ここはネムナムやフォーボーなどの名物料理があり、地元の人々に愛されています。
            <br />
            Nam Dinh is also famous for its local delicacies like 'Nem Nam' and
            'Pho Bo', which are loved by the locals.
          </p>
          <div className="image-gallery">
            {famousFoodImages.map((image, index) => (
              <img key={index} src={image} alt={`Famous Food ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="expanded-content">
          <div className="additional-images">
            <img src="/hometown/hometown2.jpg" alt="Place 2" />
            <img src="/hometown/hometown3.jpg" alt="Place 3" />
            <img src="/hometown/hometown4.jpg" alt="Place 4" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hometown;
