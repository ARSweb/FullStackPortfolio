import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="container home-inner">
        <div className="home-left left">
          <span className="badge">Available for new projects</span>

          <h1>
            Hi, I'm Azizbek <br />
            <span>Full Stack Dev</span>
          </h1>

          <p>
            I build modern, scalable web applications with React, Node.js, and MongoDB.
          </p>

          <div className="buttons">
            <button className="btn primary">View My Work</button>
            <button className="btn secondary">Contact Me</button>
          </div>

          <div className="chiziq"></div>

          <p id="ib">TRUSTED TECH STACK</p>

          <div className="iconlar">
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-docker-plain"></i>
          </div>
        </div>

        <div className="right">
          <div className="code-box">
            <div className="mac">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

<pre>{`const developer = {
  name: "Azizbek",
  role: "Full Stack Dev",
  skills: ["React", "Node", "MongoDB"],
  hardWorker: true
}`}</pre>

            <div className="card">
              <div className="check">✔</div>
              <div className="card-text">
                <div className="small-text">Projects Complete</div>
                <div className="large-text">50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}