import "../../global.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* TITLE */}
        <div className="about-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">

          {/* LEFT */}
          <div className="about-left left">
            <div className="image-box">
              <img src="https://picsum.photos/500/600" alt="about" />

              <div className="image-overlay">
                <span className="coder">&lt;Coder /&gt;</span>
                <h3>Passionate about clean code</h3>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right right">
            <h3 className="main-text">
              I create digital products with a focus on{" "}
              <span>User Experience</span> and <span>Performance</span>.
            </h3>

            <p>
              My journey started with a curiosity for how things work on the web. Today, I specialize in the MERN stack, building robust applications that solve real-world problems.
            </p>

            <p>
              I believe in writing clean, maintainable code and designing interfaces that are intuitive and accessible.
            </p>

            {/* CARDS */}
            <div className="about-cards">

              <div className="about-card">
                <h4>Frontend</h4>
                <p>React, Tailwind, Next.js</p>
              </div>

              <div className="about-card">
                <h4>Backend</h4>
                <p>Node, Express, MongoDB</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}