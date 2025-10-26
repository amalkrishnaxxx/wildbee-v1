const AboutUs = () => {
  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          padding: 6rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        @media (max-width: 1024px) {
          .about-section {
            flex-direction: column;
            padding: 4rem 1.5rem;
            gap: 3rem;
          }
        }

        /* Left Content Section */
        .about-content {
          flex: 1;
          max-width: 600px;
        }

        @media (max-width: 1024px) {
          .about-content {
            text-align: center;
            max-width: 100%;
          }
        }

        .about-section h2 {
          color: #2C3E50;
          font-size: 1.125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          opacity: 0.7;
        }

        .about-section h1 {
          color: #1a1a1a;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .about-section h1 {
            font-size: 2.5rem;
          }
        }

        .about-section h1 .highlight {
          color: #FFB400;
          position: relative;
          display: inline-block;
        }

        .about-section h1 .highlight::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: #FFB400;
          opacity: 0.3;
        }

        .tagline {
          color: #1a1a1a;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .tagline {
            font-size: 1.25rem;
          }
        }

        .about-description {
          color: #5a5a5a;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .about-description {
            font-size: 1rem;
          }
        }

        /* Right Service Cards Section */
        .services-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 550px;
        }

        @media (max-width: 1024px) {
          .services-box {
            max-width: 600px;
            width: 100%;
          }
        }

        .service-card {
          background: white;
          border-radius: 12px;
          padding: 2rem 2.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #FFB400 0%, #FF8C00 100%);
          transform: scaleY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          border-color: rgba(255, 180, 0, 0.3);
        }

        .service-card:hover::before {
          transform: scaleY(1);
        }

        .service-card h3 {
          color: #1a1a1a;
          font-size: 1.375rem;
          font-weight: 700;
          margin: 0 0 0.875rem 0;
          letter-spacing: -0.02em;
        }

        .service-card p {
          color: #5a5a5a;
          font-size: 0.9375rem;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .service-card {
            padding: 1.75rem 2rem;
          }

          .service-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }

          .service-card p {
            font-size: 0.9rem;
          }
        }

        /* Decorative Elements */
        .decoration-circle {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 180, 0, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .decoration-circle-1 {
          top: -200px;
          right: -200px;
        }

        .decoration-circle-2 {
          bottom: -200px;
          left: -200px;
        }

        @media (max-width: 1024px) {
          .decoration-circle {
            display: none;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>

        {/* Left Content Section */}
        <div className="about-content">
          <h2>Discover More</h2>
          <h1>
            <span className="highlight">About Us</span>
          </h1>
          <p className="tagline">We make brands shine online.</p>
          <p className="about-description">
            At wildbee, we blend design, storytelling, and strategy to craft digital
            experiences that elevate businesses, engage audiences, and drive growth with confidence.
          </p>
        </div>

        {/* Right Service Cards Section */}
        <div className="services-box">
          <div className="service-card">
            <h3>Creative Design</h3>
            <p>
              We craft visuals that bring your brand to life. From logos to full brand identities,
              we design with clarity, consistency, and creativity to make a lasting impression.
            </p>
          </div>
          <div className="service-card">
            <h3>Digital Strategy</h3>
            <p>
              A strong presence starts with the right plan. We align your goals with tailored
              strategies that connect with your audience and drive measurable results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;