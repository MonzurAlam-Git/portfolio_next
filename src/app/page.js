import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import TechUsed from "./Components/TechUsed";

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between">
      <div>
        <Hero></Hero>
        <Projects></Projects>
        <TechUsed></TechUsed>
      </div>
    </main>
  );
}
