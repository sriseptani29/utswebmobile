import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./en-style.css";
import MySkills from "./components/skills";
import "./components/skills.css";
import App from "./components/App";
import ContactForm from "./components/contactform";

export default function CVonline() {
  return(
    <section>
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <MySkills />
      <App />
      <ContactForm />
    </section>  
  );
}
