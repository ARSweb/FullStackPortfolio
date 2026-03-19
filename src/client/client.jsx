// Barcha sahifalar shu yerga chaqiriladi

// Header
import Header from "./header/header"

// Main
import About from "./main/about/about"
import Project from "./main/projects/project"
import Resume from "./main/resume/resume"
import Contact from "./main/contact/contact"

// Footer
import Footer from "./footer/footer"

const Client = () => {
  return (
    <>
      <div className="container">

        <header>
          <Header/>
        </header>

        <main>
          <About/>
          <Project/>
          <Resume/>
          <Contact/>
        </main>

        <footer>
          <Footer/>
        </footer>

      </div>
    </>
  )
}

export default Client