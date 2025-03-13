'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiArrowLeft, FiArrowRight, FiGithub } from 'react-icons/fi';

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

export default function ProjectCarousel(){
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to start/reset the auto-shuffle timer
  const resetAutoShuffle = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set a new interval with increased duration (10 seconds)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Changed from 5000 to 10000 milliseconds
  };
  
  // Function to go to the next project
  const nextProject = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoShuffle(); // Reset timer on manual navigation
  };
  
  // Function to go to the previous project
  const prevProject = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    resetAutoShuffle(); // Reset timer on manual navigation
  };
  
  // Set up auto-shuffle on component mount
  useEffect(() => {
    resetAutoShuffle();
    
    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Also reset the timer when clicking on dot indicators
  const goToProject = (index: number) => {
    setCurrentIndex(index);
    resetAutoShuffle();
  };
  
  const currentProject = projects[currentIndex];
  
  return (
    <div className="project-carousel">
      <h2 className="section-title">Open Source/Projects</h2>
      
      <div className="carousel-container">
        <button 
          className="carousel-button prev" 
          onClick={prevProject}
          aria-label="Previous project"
        >
          <FiArrowLeft />
        </button>
        
        <div className="project-card">
          <div className="project-image">
            {currentProject.image ? (
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/placeholder.jpg'; // Fallback image
                }}
              />
            ) : (
              <div className="placeholder-image">
                {currentProject.title.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="project-info">
            <h3>{currentProject.title}</h3>
            <p>{currentProject.description}</p>
            
            <div className="project-tech">
              {currentProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="project-links">
              {currentProject.id === 1 ? (
                <span className="project-link github-link disabled">
                  <FiGithub className="link-icon" /> Private Repository
                </span>
              ) : (
                <a 
                  href={currentProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FiGithub className="link-icon" /> {currentProject.type === 'personal' ? 'Source Code' : 'GitHub'}
                </a>
              )}
              
              <a 
                href={currentProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={nextProject}
          aria-label="Next project"
        >
          <FiArrowRight />
        </button>
      </div>
      
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 