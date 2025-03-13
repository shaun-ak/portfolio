import React from 'react';

export default function WorkExperience() {
  return (
    <section className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="job-title">Software Engineer – Chubb Studio (Canvas Team)</h3>
          <div className="job-meta">
            <span className="company">CHUBB Business Services LLP</span>
            <div className="job-details">
              <span className="location">📍 Hyderabad, Telangana, India</span>
              <span className="date">⏱️ May 2022 - Present</span>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <ul className="experience-details">
            <li>Spearheaded the UI upgrade for the admin platform, improving application load time by <strong>30-40%</strong>.</li>
            <li>Designed and developed a reusable search and filter component, now leveraged across multiple pages for enhanced usability.</li>
            <li>Experienced in <code>Angular</code> unit testing and <code>Storybook</code> implementation to ensure component reliability and maintainability.</li>
            <li>Actively contributed to technical and design discussions in an agile environment, providing valuable insights to enhance team efficiency.</li>
            <li>Recognized for excellence with a <strong>4/5 rating</strong> (Exceeding Expectations) for 2023-24.</li>
          </ul>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="job-title">Software Engineer Intern</h3>
          <div className="job-meta">
            <span className="company">CHUBB Business Service LLP</span>
            <div className="job-details">
              <span className="location">📍 Remote</span>
              <span className="date">⏱️ Sept 2021 – May 2022</span>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <ul className="experience-details">
            <li>Developed the "Applications" section of the Chubb Studio Admin Platform, enabling backend engineers to monitor API health through a user-friendly frontend interface.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 