'use client';

import React, { useState } from 'react';
import { FiGithub, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

// Define TypeScript interfaces for our data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  githubLink: string;
  type: 'open-source' | 'personal';
}

// Sample project data - replace with your own projects
const projects: Project[] = [
  {
    id: 1,
    title: 'PlanetHop',
    description: 'A 3D space exploration game built with Cursor AI, Claude 3.7 Sonnet and Grok AI. Private repository.',
    image: '/planethop.png',
    technologies: ['Cursor AI', 'Claude 3.7 Sonnet', 'Grok AI'],
    link: 'https://www.planethop.fun/',
    githubLink: 'https://github.com/shaun-ak/PlanetHop',
    type: 'personal'
  },
  {
    id: 2,
    title: 'Open Source Contribution to Ghostfolio',
    description: 'My contribution to an open source wealth management project',
    image: '/ghostfolio.png',
    technologies: ['Angular', 'NestJs','TypeScript', 'Prisma'],
    link: 'https://github.com/ghostfolio/ghostfolio',
    githubLink: 'https://github.com/ghostfolio/ghostfolio/pulls?q=is%3Apr+is%3Aclosed+author%3Ashaun-ak',
    type: 'open-source'
  },
  {
    id: 3,
    title: 'ItineraryGPT',
    description: 'An AI-powered travel assistant that helps you create personalized travel itineraries through natural conversation. Get detailed day-by-day plans, local recommendations, and explore various travel templates.',
    image: '/itinerarygpt.png',
    technologies: ['Next js', 'Tailwind CSS', 'Open AI apis'],
    link: 'https://itinerary-gpt.vercel.app/',
    githubLink: 'https://github.com/shaun-ak/Itinerary-gpt',
    type: 'personal'
  }
];

export default function ProjectAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // First project expanded by default
  
  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <div className="project-accordion">
      <h2 className="section-title">Open Source/Projects</h2>
      
      {projects.map((project) => (
        <div 
          key={project.id} 
          className={`accordion-item ${expandedId === project.id ? 'expanded' : ''}`}
        >
          <div 
            className="accordion-header" 
            onClick={() => toggleProject(project.id)}
          >
            <h3>{project.title}</h3>
            <div className="accordion-icon">
              {expandedId === project.id ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
          
          {expandedId === project.id && (
            <div className="accordion-content">
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/placeholder.jpg';
                    }}
                  />
                ) : (
                  <div className="placeholder-image">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.id === 1 ? (
                    <span className="project-link github-link disabled">
                      <FiGithub className="link-icon" /> Private Repository
                    </span>
                  ) : (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <FiGithub className="link-icon" /> {project.type === 'personal' ? 'Source Code' : 'GitHub'}
                    </a>
                  )}
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink className="link-icon" /> View Project
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 