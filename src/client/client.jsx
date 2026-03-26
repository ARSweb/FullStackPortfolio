import { useEffect } from "react";
import "./global.css";

// Header
import Header from "./header/header"

// Main
import Home from "./main/home/home"
import About from "./main/about/about"
import Project from "./main/projects/project"
import Resume from "./main/resume/resume"
import Contact from "./main/contact/contact"

// Footer
import Footer from "./footer/footer"

const Client = () => {

  useEffect(() => {
    document.body.classList.add("home-page");
  }, []);

  return (
    <>
      <Header/>

      <main>
        <Home/>
        <About/>
        <Project/>
        <Resume/>
        <Contact/>
      </main>

      <Footer/>
    </>
  )
}

export default Client 