"use client";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
// import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import TechUsed from "./Components/TechUsed";

export default function Home() {
  return (
    <main className="items-center justify-between">
      <div>
        {/* <Hero></Hero> */}
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Services></Services>
        <TechUsed></TechUsed>
        <Contact></Contact>
      </div>
    </main>
  );
}
