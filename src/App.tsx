import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Echo } from "./components/Echo";
import { WhyMachSeven } from "./components/WhyMachSeven";
import { Careers } from "./components/Careers";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Echo />
        <WhyMachSeven />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
