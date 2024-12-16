import React from "react";

const WorkExperience = () => {
  const universitySkills = [
    { language: 'PHP (Web Development)', experience: '4 tháng', startYear: '2021年2月', endYear: '2021年6月' },
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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>大学と会社での経験 - 技術スキル</h2>

      {/* Đặt hai phần bên cạnh nhau */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Phần đại học */}
        <div style={{ width: "48%" }}>
          <h3>大学での経験</h3>
          <ul style={{ listStyleType: "none", padding: 50 }}>
            {universitySkills.map((skill, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    marginLeft: "30px",
                    position: "relative",
                    width: "300px",
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
        <div style={{ width: "48%" }}>
          <h3>日本の会社での経験</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {companySkills.map((skill, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    marginLeft: "30px",
                    position: "relative",
                    width: "300px",
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
