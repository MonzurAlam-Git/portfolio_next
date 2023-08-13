import Hero from "./Components/Hero";
import TechUsed from "./Components/TechUsed";

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between">
      <div>
        <Hero></Hero>
        <TechUsed></TechUsed>
      </div>
    </main>
  );
}
