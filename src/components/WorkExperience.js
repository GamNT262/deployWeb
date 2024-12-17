import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const universitySkills = [
    {
      language: "PHP (Web Development)",
      experience: "4ヶ月",
      startYear: "2021年2月",
      endYear: "2021年6月",
    },
  ];

  const companySkills = [
    {
      language: "JavaScript",
      experience: "3ヶ月間",
      startYear: "2020年11月",
      endYear: "2021年1月",
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
      className="work-experience-container"
      style={{
        backgroundImage: "url('/assets/images/image5.jpg')", // Đường dẫn hình ảnh nền
      }}
    >
      <h2>大学と会社での経験 - 技術スキル</h2>

      <div className="skills-section">
        {/* Đại học */}
        <div className="skill-column">
          <h3>大学での経験</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {universitySkills.map((skill, index) => (
              <li key={index} className="skill-card">
                <strong>{skill.language}</strong>
                <p>{skill.experience}</p>
                <p>
                  <strong>期間:</strong> {skill.startYear} - {skill.endYear}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Công ty */}
        <div className="skill-column">
          <h3>日本の会社での経験</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {companySkills.map((skill, index) => (
              <li key={index} className="skill-card">
                <strong>{skill.language}</strong>
                <p>{skill.experience}</p>
                <p>
                  <strong>期間:</strong> {skill.startYear} - {skill.endYear}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
