import React, { useState } from "react";
import "./Hobbies.css";

function Hobbies() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Danh sách ảnh cho du lịch
  const travelImages = [
    "/hobbies/travel1.jpg",
    "/hobbies/travel2.jpeg",
    "/hobbies/travel3.jpg",
    "/hobbies/travel4.png",
    "/hobbies/travel5.jpg",
  ];

  // Danh sách ảnh cho tình nguyện
  const volunteerImages = [
    "/hobbies/image1.jpg",
    "/hobbies/image2.jpg",
    "/hobbies/image3.jpg",
    "/hobbies/image4.jpg",
  ];

  // Cắt danh sách ảnh để chỉ hiển thị 2 ảnh ban đầu
  const visibleTravelImages = travelImages.slice(0, 2);
  const visibleVolunteerImages = volunteerImages.slice(0, 2);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="hobbies-container">
      <header>
        <h1>私の趣味</h1>
      </header>

      <div className="intro-boxes">
        <div className="box">
          <h3>旅行 </h3>
          <p>
            私は自然がとても好きなので、自然が美しい場所に旅行するのが好きです。
            <br />
            そこではすべてが新鮮で涼しく、とても快適に感じます。
          </p>
          <div className="image-gallery">
            {visibleTravelImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Traveling ${index + 1}`}
                className="hobby-image"
              />
            ))}
          </div>
        </div>

        <div className="box">
          <h3>ボランティア</h3>
          <p>
            ボランティア活動に参加するのが好きです。なぜなら、困っている人を助けられるだけでなく、<br/>
            新しい友達と知り合う機会にもなるからです。<br/>
            さらに、それによって自分に自信が持てるようにもなります。

          </p>
          <div className="image-gallery">
            {visibleVolunteerImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Volunteering ${index + 1}`}
                className="hobby-image"
              />
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-content">
          <div className="additional-images">
            {travelImages.slice(2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Extra Traveling ${index + 3}`}
                className="hobby-image"
              />
            ))}
            {volunteerImages.slice(2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Extra Volunteering ${index + 3}`}
                className="hobby-image"
              />
            ))}
          </div>
        </div>
      )}

      <button onClick={handleExpandClick}>
        {isExpanded ? "Show Less" : "See More"}
      </button>
    </div>
  );
}

export default Hobbies;
