import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's work together</h1>

          <p>
            Have a project in mind or just want to say hi? I'm always open to
            discussing new projects, creative ideas or opportunities to be part
            of your visions.
          </p>

          {/* EMAIL */}
          <div className="contact-info">
            <div className="icon">📧</div>
            <div>
              <span>Email Me</span>
              <h4>hello@azizbek.dev</h4>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="contact-info">
            <div className="icon">🔗</div>
            <div>
              <span>Socials</span>
              <div className="social-icons">
  <i className="fa-brands fa-telegram"></i>
  <i className="fa-brands fa-instagram"></i>
  <i className="fa-brands fa-github"></i>
</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="form">

            <label>Name</label>
            <input type="text" placeholder="John Doe" />

            <label>Email</label>
            <input type="email" placeholder="john@example.com" />

            <label>Message</label>
            <textarea placeholder="Tell me about your project..."></textarea>

            <button type="submit">
              Send Message ✈️
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}