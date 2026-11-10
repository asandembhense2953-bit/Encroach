import AboutHero from "./about/AboutHero.jsx";
import Story from "./about/Story.jsx";
import Stats from "./about/Stats.jsx";
import Values from "./about/Values.jsx";
import Team from "./about/Team.jsx";
import AboutCta from "./about/AboutCta.jsx";

export default function About() {
  return (
    <div className="about">
      <AboutHero />
      <Story />
      <Stats />
      <Values />
      <Team />
      <AboutCta />
    </div>
  );
}