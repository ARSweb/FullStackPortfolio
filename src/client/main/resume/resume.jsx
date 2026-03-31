import "./resume.css";

export default function Resume() {
  return (
    <section className="resume">
      <div className="resume-wrapper">

        {/* CHAP BLOK */}
        <div className="resume-left">
          <img src="https://i.pravatar.cc/150" alt="Profile" />

          <h2>Contact</h2>
          <div className="chiziqi"></div>
          <div className="info">
            <p>📧 azizbek@example.com</p>
            <p>📞 +998 90 123 45 67</p>
            <p>📍 Tashkent</p>
          </div>

          <h2>Skills</h2>
          <div className="chiziqi"></div>
          <div className="skills">
            <div className="skill-block">
              <h4>Frontend</h4>
              <p>React, Vue.js, TypeScript, Tailwind CSS, Next.js, HTML5/CSS3</p>
            </div>
            <div className="skill-block">
              <h4>Backend</h4>
              <p>Node.js, Express, Python, Django, PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="skill-block">
              <h4>Tools & DevOps</h4>
              <p>Git, Docker, AWS (EC2, S3), CI/CD, Jest, Webpack</p>
            </div>
          </div>
        </div>

        {/* O‘NG BLOK */}
        <div className="resume-right">
          <h2>Alex Morgan</h2>
          <h4>Full Stack Developer</h4>
          <div className="chiziqi"></div>

          <h3>Experience</h3>

          {/* 1-Experience */}
          <div className="item">
            <h4>Senior Frontend Developer</h4>
            <span>2021 - Present | TechNova Solutions | San Francisco, CA</span>
            <p>
              Spearheaded the migration of a legacy monolithic application to a modern React/Next.js micro-frontend architecture, improving initial load times by 45%.
              Developed and maintained a comprehensive UI component library using Storybook and Tailwind CSS, adopted by 4 internal engineering teams.
              Mentored junior developers and implemented strict CI/CD pipelines and code review processes, reducing production bugs by 30%.
            </p>
          </div>

          {/* 2-Experience */}
          <div className="item">
            <h4>Full Stack Developer</h4>
            <span>2018 - 2021 | Creative Digital Agency | Austin, TX</span>
            <p>
              Built custom e-commerce solutions using Node.js, Express, and React, securely processing over $1M in monthly transactions.
              Designed and optimized RESTful APIs and complex PostgreSQL database schemas for high-traffic client applications.
              Integrated third-party payment gateways (Stripe, PayPal) and automated marketing workflows using webhooks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}