
import Home from "./home/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contacts from "./contacts/page";
import Experience from "./experience/page";
import Certifications from "./Certification/page";


export default function Main() {
  return (
    <>
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contacts />
    </>
  );
}
