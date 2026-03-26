import "../../global.css";

export default function Resume() {
  return (
    <section className="resume">
  <div className="container">

    <div className="resume-wrapper">

      {/* CHAP */}
      <div className="resume-left">
        <img src="https://i.pravatar.cc/150" alt="" />

        <h2>Azizbek</h2>
        <p className="role">Full Stack Developer</p>

        <div className="info">
          <p>📧 azizbek@example.com</p>
          <p>📞 +998 90 123 45 67</p>
          <p>📍 Tashkent</p>
        </div>

        <button className="cv-btn">Download CV</button>
      </div>

      {/* O‘NG (ICHKI QUTI) */}
      <div className="resume-right">
        <h3>Experience</h3>

        <div className="item">
          <h4>Senior Frontend Developer</h4>
          <span>TechCorp | 2023 - Present</span>
          <p>Leading frontend team...</p>
        </div>

        <div className="item">
          <h4>Web Developer</h4>
          <span>Creative Agency | 2021 - 2023</span>
          <p>Developed websites...</p>
        </div>
        <div className="chiziqi"></div>

        <h3>Education</h3>

        <div className="item">
          <h4>B.S Computer Science</h4>
          <span>TUIT | 2017 - 2021</span>
        </div>
      </div>

    </div>

  </div>
</section>
  );
}