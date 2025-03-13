import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from './components/ThemeToggle';
import { FiGithub, FiLinkedin, FiTwitter, FiFileText } from 'react-icons/fi';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaunak Das - Portfolio",
  description: "Personal portfolio of Shaunak Das",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container">
          <header className="header">
            <h1 className="name">Shaunak Das</h1>
            <div className="header-controls">
              <div className="social-links">
                <a 
                  href="https://github.com/shaun-ak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                  title="Visit my GitHub profile"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shaunak-das-586338188/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                  title="Connect with me on LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="https://x.com/Shaun_ak_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter Profile"
                  title="Follow me on Twitter/X"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1-UY2xBmwH85VDP4DSj-PwKn4Nrhn698-/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link resume-link"
                  aria-label="Resume"
                  title="View my resume"
                >
                  <FiFileText size={20} />
                </a>
              </div>
              <ThemeToggle />
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
