import React from "react";

const WorkExperience = () => {
  const universitySkills = [
    { language: 'PHP (Web Development)', 
      experience: '4ヶ月', 
      startYear: '2021年2月', 
      endYear: '2021年6月' },
  ];

  const companySkills = [
    {
      language: "JavaScript",
      experience: "3ヶ月間",
      startYear: "2020年11月",
      endYear: "22021年1月",
    },
    {
      language: "COBOL",
      experience: "2年3ヶ月間",
      startYear: "2021年7月",
      endYear: "2023年9月",
    },
    {
      language: "VBScript",
      experience: "1年10ヶ月間",
      startYear: "2021年7月",
      endYear: "2023年4月",
    },
    {
      language: "VBA",
      experience: "4ヶ月間",
      startYear: "2024年7月",
      endYear: "2024年11月",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('/assets/images/image5.jpg')", // Đường dẫn hình ảnh
        backgroundSize: "cover", // Bao phủ toàn màn hình
        backgroundPosition: "center", // Căn giữa hình ảnh
        backgroundRepeat: "no-repeat", // Không lặp lại hình ảnh
        minHeight: "100vh", // Chiều cao tối thiểu bằng 100% viewport height
        width: "100%", // Đảm bảo chiều rộng đầy đủ
        margin: "0", // Loại bỏ margin
      }}
    >
      <h2 style={{ textAlign: "center" }}>大学と会社での経験 - 技術スキル</h2>

      {/* Đặt hai phần bên cạnh nhau */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        {/* Phần đại học */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Căn giữa theo chiều ngang
            textAlign: "center", // Căn giữa văn bản bên trong
            width: "48%", // Cột rộng 48%
          }}
        >
          <h3>大学での経験</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {universitySkills.map((skill, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#add8e6",
                    padding: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    margin: "0 auto", // Căn giữa div
                    width: "500px", // Chiều rộng cố định cho mỗi mục
                    minHeight: "150px",
                    fontSize: "18px",
                  }}
                >
                  <strong>{skill.language}</strong>
                  <p>{skill.experience}</p>
                  <p>
                    <strong>期間:</strong> {skill.startYear} - {skill.endYear}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Phần công ty Nhật Bản */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Căn giữa theo chiều ngang
            textAlign: "center", // Căn giữa văn bản bên trong
            width: "48%", // Cột rộng 48%
          }}
        >
          <h3>日本の会社での経験</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {companySkills.map((skill, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#add8e6",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    margin: "0 auto", // Căn giữa div
                    width: "500px", // Chiều rộng cố định cho mỗi mục
                    minHeight: "150px",
                    fontSize: "18px",
                  }}
                >
                  <strong>{skill.language}</strong>
                  <p>{skill.experience}</p>
                  <p>
                    <strong>期間:</strong> {skill.startYear} - {skill.endYear}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
