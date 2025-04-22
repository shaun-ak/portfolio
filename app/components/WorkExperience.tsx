import React from 'react';

export default function WorkExperience() {
  return (
    <section className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="job-title">Software Engineer</h3>
          <div className="job-meta">
            <span className="company">CHUBB Business Services LLP</span>
            <div className="job-details">
              <span className="location">📍 Hyderabad, Telangana, India</span>
              <span className="date">⏱️ Jun 2022 - Present</span>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <ul className="experience-details">
            <li>Built and maintained <strong>enterprise-scale</strong> admin portal used for partner on-boarding and product launches.</li>
            <li>Refactored frontend API integrations to support a unified global data source architecture, resulting in improved
<strong>application performance</strong> and enhanced <strong>data consistency</strong> across modules.</li>
            <li>Led a major UI upgrade for the admin platform, improving <strong>application load times by 30–40%</strong> through performance
optimization and modern frontend practices.</li>
            <li>Designed and implemented a <strong>reusable search and filter component</strong> adopted across multiple modules, enhancing
<strong>user experience</strong> and streamlining development through <strong>improved maintainability</strong> and <strong>code reuse</strong>.</li>
            <li>Experienced in writing <strong>Angular unit tests</strong> and <strong>implementing Storybook</strong> to ensure component reliability,
maintainability, and consistent UI documentation.</li>
            <li>Actively contributed to <strong>technical and design discussions</strong> in an <strong>Agile</strong> environment, offering insights that improved
team collaboration and development efficiency.</li>
            <li><strong>Mentored</strong> and <strong>guided</strong> two interns by providing technical support, code reviews, and best practices to strengthen
their skills in Angular and TypeScript.</li>
            <li><strong>Recognized for excellence</strong> with a <strong>4/5 rating (Exceeding Expectations) for 2023-24</strong>.</li>
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
            <li><strong>Developed the "Applications" section</strong> of the Chubb Studio Admin Platform, enabling backend engineers to
<strong>monitor API health</strong> through a user-friendly frontend interface.</li>
            <li>Worked closely with senior engineers to improve frontend performance and optimize API requests.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 
