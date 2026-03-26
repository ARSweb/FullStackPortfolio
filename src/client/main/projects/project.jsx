import "../../global.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects-header">
          <div>
            <h2>My Projects</h2>
            <p>
              A selection of my recent work. From e-commerce platforms to productivity tools.
            </p>
          </div>
          <a href="#" className="github-link">View Github →</a>
        </div>

        <div className="projects-grid">

          {/* CARD */}
          {[1,2,3].map((item, i) => (
            <div className="project-card" key={i}>

              <div className="project-image">
                <img src={`https://picsum.photos/40${i}/200`} alt="" />
              </div>

              <div className="card-body">
                <h3>Project {i+1}</h3>
                <p>Some description...</p>
                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>API</span>
                </div>
              </div>

              {/* 🔥 OVERLAY ENDIDA */}
              <div className="overlay">
                <a href="#" className="btn live">🔍 Live Demo</a>
                <a href="#" className="btn code">💻 Code</a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}