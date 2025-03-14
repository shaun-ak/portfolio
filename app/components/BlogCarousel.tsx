'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi';

// Define TypeScript interface for blog posts
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date: string;
  tags: string[];
}

// Sample blog data - replace with your actual blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Micro-Frontends: The Next Big Thing or Just Hype?",
    excerpt: "A deep dive into creating applications that leverage micro-frontends for better scalability and maintainability.",
    image: "/mfes.png",
    link: "https://dev.to/shaunak_38/micro-frontends-the-next-big-thing-or-just-hype-p6f",
    date: "Feb 26, 2025",
    tags: ["Micro-Frontends", "Web Development"]
  },
  {
    id: 2,
    title: "JavaScript vs. TypeScript: A Developer\'s Guide to Choosing the Right Tool",
    excerpt: "A comprehensive comparison of JavaScript and TypeScript, exploring their features, syntax, and use cases.",
    image: "/jsts.png",
    link: "https://dev.to/shaunak_38/javascript-vs-typescript-a-developers-guide-to-choosing-the-right-tool-2c84",
    date: "Feb 23, 2025",
    tags: ["JavaScript", "TypeScript", "Web Development"]
  },
  {
    id: 3,
    title: "From Zero to PlanetHop: How I Built a 3D Space Game in 6 Hours with AI and Three.js",
    excerpt: "A journey of how I built a 3D space game in 6 hours with AI and Three.js.",
    image: "/planethopblog.png",
    link: "https://dev.to/shaunak_38/from-zero-to-planethop-how-i-built-a-3d-space-game-in-6-hours-with-ai-and-threejs-2pda",
    date: "Mar 10, 2025",
    tags: ["Three.js", "AI", "Game Development"]
  },
  {
    id: 4,
    title: "My Journey: From Angular Dev to Remote Job Hunter 🚀",
    excerpt: "A journey of how I aspire to become a remote job employee from a full-time Angular developer.",
    image: "/angdevtoremote.png",
    link: "https://dev.to/shaunak_38/my-journey-from-angular-dev-to-remote-job-hunter-468a",
    date: "Feb 19, 2025",
    tags: ["Remote Jobs", "Job Hunting", "Career Change"]
  },
  {
    id: 5,
    title: "You Don\'t Know JS Yet: My Weekly Journey Through JavaScript Mastery",
    excerpt: "A weekly deep dive into Kyle Simpson's 'You Don't Know JS Yet' series, sharing insights and learnings about JavaScript's core concepts and mechanisms.",
    image: "/ydkjsy.png",
    link: "https://dev.to/shaunak_38/you-dont-know-js-yet-my-weekly-journey-through-javascript-mastery-6lm",
    date: "Mar 2, 2025",
    tags: ["JavaScript", "Web Development", "Career Change"]
  }
];

export default function BlogCarousel() {
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
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
  };
  
  // Function to go to the next blog post
  const nextBlog = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoShuffle();
  };
  
  // Function to go to the previous blog post
  const prevBlog = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
    resetAutoShuffle();
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
  const goToBlog = (index: number) => {
    setCurrentIndex(index);
    resetAutoShuffle();
  };
  
  const currentBlog = blogPosts[currentIndex];
  
  return (
    <div className="blog-carousel">
      <h2 className="section-title">My Blog Posts</h2>
      
      <div className="carousel-container">
        <button 
          className="carousel-button prev" 
          onClick={prevBlog}
          aria-label="Previous blog post"
        >
          <FiArrowLeft />
        </button>
        
        <div className="blog-card">
          <div className="blog-image">
            {currentBlog.image ? (
              <img 
                src={currentBlog.image} 
                alt={currentBlog.title} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/placeholder-blog.jpg';
                }}
              />
            ) : (
              <div className="placeholder-image">
                {currentBlog.title.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="blog-info">
            <h3>{currentBlog.title}</h3>
            <div className="blog-date">{currentBlog.date}</div>
            <p>{currentBlog.excerpt}</p>
            
            <div className="blog-tags">
              {currentBlog.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href={currentBlog.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-link"
            >
              <FiExternalLink className="link-icon" /> Read Full Article
            </a>
          </div>
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={nextBlog}
          aria-label="Next blog post"
        >
          <FiArrowRight />
        </button>
      </div>
      
      <div className="carousel-dots">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToBlog(index)}
            aria-label={`Go to blog post ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 