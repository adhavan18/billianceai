import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const teamMembers = [
  {
    name: "HARSHINI",
    role: "Cybersecurity",
    quote: "In a data-driven world, the strongest algorithm is the one built on an unbreakable foundation of security and integrity.",
    description:
      "At the intersection of AI and retail, security is paramount. Harshini's expertise is integral to the integrity of our machine learning models. She architects secure data pipelines to protect sensitive customer information and fortifies our algorithms against adversarial attacks. Her work ensures our AI solutions are not just powerful, but fundamentally safe, robust, and trustworthy.",
    image: "harshini-photo.png",
  },
  {
    name: "TARUN KM",
    role: "AI / IOT with Vision/OpenCV",
    quote: "The next frontier of retail analytics isn't just online data; it's about giving physical stores the ability to see, understand, and react in real-time.",
    description:
      "Tarun spearheads our innovation in the physical retail space by integrating AI with IoT and Computer Vision. He develops systems that analyze in-store customer behavior, automate inventory tracking through shelf monitoring, and enable next-gen concepts like frictionless checkout. His work bridges the gap between the digital and physical worlds, offering clients a truly unified view of their operations.",
    image: "tarun-photo.png",
  },
  {
    name: "GOUTHAMARVIND V",
    role: "Machine Learning",
    quote: "Data is the raw material, but the algorithm is the craft. It's how we shape vast information into precise, predictive intelligence.",
    description:
      "As a core architect of our intelligence engine, Gouthamarvind designs and implements the sophisticated machine learning models that power our platform. He specializes in developing predictive algorithms for complex retail challenges like demand forecasting and price optimization. His focus is on maximizing model accuracy to deliver state-of-the-art performance and tangible results.",
    image: "gouthamarvind-photo.png",
  },
  {
    name: "KEERTHI",
    role: "Frontend",
    quote: "The true power of an algorithm is unlocked not by its complexity, but by the simplicity and elegance of the interface through which it is presented.",
    description:
      "Keerthi is responsible for translating our complex AI insights into intuitive and powerful user experiences. She specializes in crafting the client-facing dashboards and data visualizations that make our machine learning models accessible and actionable. Her expertise ensures our clients can effortlessly interact with their data and make critical business decisions with clarity and confidence.",
    image: "keerthi-photo.png",
  },
  {
    name: "PREETHI",
    role: "Website & Data Analyst",
    quote: "Data tells a story. My role is to listen carefully and translate that story into a clear, actionable path for business growth.",
    description:
      "As the foundation of our machine learning process, Preethi transforms raw retail data into refined, intelligent fuel for our models. She specializes in data cleaning, exploratory analysis, and identifying key patterns that drive predictive accuracy. Her meticulous work in structuring complex datasets is essential to building the powerful and reliable AI solutions our clients depend on.",
    image: "preethi-photo.png",
  },
  {
    name: "DHRITI ARCOT GIRIDHAR",
    role: "All-Rounder",
    quote: "A brilliant idea is just the starting point. True innovation happens in the execution—by bridging the gap between the code and the customer.",
    description:
      "As a versatile link between our technical and strategic teams, Dhriti ensures our operations run with seamless efficiency. Her role encompasses product management, client relations, and strategic planning, guaranteeing our innovative AI solutions are perfectly aligned with our clients' business objectives. Dhriti's agility and holistic oversight are key to transforming great ideas into market-ready products.",
    image: "dhriti-photo.png",
  },
  {
    name: "HARISH BALAJI",
    role: "Sales & Marketing",
    quote: "We don't sell AI; we sell our clients a competitive advantage. We provide a clear path to smarter decisions, greater efficiency, and increased profitability.",
    description:
      "Harish serves as the crucial bridge between our advanced AI technology and the business goals of our clients. He specializes in articulating the value of our solutions, translating complex capabilities into clear, measurable ROI. By understanding the unique challenges of the retail sector, he forges strategic partnerships and drives the growth of Billiance AI.",
    image: "harish-photo.png",
  },
];

// --- Header ---
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // 🔥 Add this line

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header">
      <nav className="nav">
        <Link to = "/" className="nav-brand">
          <img src="/assets/logo.png" alt="Billiance AI Logo" className="logo-icon" />
          <span className="logo-text">billianceai</span>
        </Link>

        <div className="nav-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() =>
              document.querySelector(".dropdown-menu").classList.toggle("dropdown-menu--open")
            }
          >
            ☰
          </button>
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/#pricing")}>Pricing</button>
            </li>
            <li>
              <button onClick={() => navigate("/#about")}>Company</button>
            </li>
          </ul>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="header-banner">
        <div className="team-photo-bg">
          <img src="/assets/team-banner.png" alt="Team Banner" className="team-banner-img" />
        </div>
      </div>

      <div className="container">
        <div className="company-content">
          <div className="company-left">
            <p className="company-description">
              At Billiance AI, we develop intelligent machine learning solutions for the retail
              industry. To pioneer the next generation of advanced technology, we're building a team
              of dedicated innovators. These are the core members driving our vision and creating
              lasting value.
            </p>
          </div>
          <div className="company-right">
            <button className="cta-button" onClick={() => navigate("/#pricing")}>
              Explore Price <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


// --- Hero ---
const HeroSection = ({ scrollToSection }) => (
  <section className="hero-section" id="hero">
    <div className="container">
      <div className="vision-content">
        <div className="vision-left">
          <h2 className="vision-heading">
            THE MINDS
            <br />
            BEHIND THE
            <br />
            <span className="vision-italic">MISSION.</span>
          </h2>
        </div>
        <div className="vision-right">
          <p className="vision-description">
            Technology is only as brilliant as the people behind it. Meet the dedicated strategists,
            engineers, and data scientists who share a unified passion: leveraging AI to build the
            future of retail.
          </p>
          <button className="cta-button" onClick={() => scrollToSection("/teams")}>
            MEET THE TEAM <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

// --- Vision Section ---
const VisionSection = ({ scrollToSection }) => (
  <section className="vision-section" id="vision">
    <div className="vision-banner">
      <img src="/assets/team-banner.png" alt="Billiance AI Team" className="vision-banner-img" />
    </div>

    <div className="container">
      <div className="vision-content">
        <div className="vision-left">
          <h2 className="vision-heading">
            HAVE A VISION?
            <br />
            LET'S MAKE IT
            <br />
            <span className="vision-italic">Into Reality.</span>
          </h2>
        </div>
        <div className="vision-right">
          <p className="vision-description">
            We are a team of innovators dedicated to solving the most complex challenges in retail.
            If you have a vision for your business, we have the expertise to bring it to life.
          </p>
          <button className="cta-button" onClick={() => scrollToSection("pricing")}>
            Let's Create <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

// --- Banner Section ---
const BillImg = () => (
  <section className="vision-section1" id="vision1">
    <div className="vision-banner1">
      <img src="/assets/billiance-banner.png" alt="Billiance AI Banner" className="vision-banner-img1" />
    </div>
  </section>
);

// --- Team Member ---
const TeamMember = ({ member, isReverse, index }) => (
  <section className={`team-member ${isReverse ? "team-member--reverse" : ""}`} id={`member-${index}`}>
    <div className="container">
      <div className="team-member-content">
        <div className="team-member-image">
          <div className="team-image-wrapper">
            <img src={`/assets/${member.image}`} alt={member.name} className="member-image" />
          </div>
        </div>
        <div className="team-member-info">
          <h2 className="member-name">{member.name}</h2>
          <h3 className="member-role">{member.role}</h3>
          <blockquote className="member-quote">"{member.quote}"</blockquote>
          <p className="member-description">{member.description}</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Teams Page ---
const TeamsPage = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header />
      <BillImg />
      <HeroSection scrollToSection={scrollToSection} />
      <div id="teams">
        {teamMembers.map((m, i) => (
          <TeamMember key={m.name} member={m} isReverse={i % 2 === 1} index={i + 1} />
        ))}
      </div>
      <VisionSection scrollToSection={scrollToSection} />
    </div>
  );
};

export default TeamsPage;
