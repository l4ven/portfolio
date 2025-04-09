import Profile from "./components/Profile";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import styles from "./styles/app.module.scss";
import Certificate from "./components/Certificate";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
import Activity from "./components/Activity";
import School from "./components/School";
import Contact from "./components/Contact";

function App() {
  return (
    <div className={styles.innerBox}>
      <Profile />
      <Introduce />
      <Skill />
      <Certificate />
      <ProjectTwo />
      <ProjectOne />
      <ProjectThree />
      <Activity />
      <School />
      <Contact />
    </div>
  );
}

export default App;
