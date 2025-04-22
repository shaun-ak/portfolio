import ProjectCards from './components/ProjectCards';
import WorkExperience from './components/WorkExperience';
import BlogCarousel from './components/BlogCarousel';

export default function Home() {
  return (
    <div className="portfolio-content">
      <section className="intro">
        <h2>Welcome to my portfolio</h2>
        <p>I'm a developer passionate about open source, tech, AI and building tools that help people. I also have fun in the process.</p>
      </section>
      
      <ProjectCards />
      
      <BlogCarousel />
      
      <WorkExperience />
    </div>
  );
}
