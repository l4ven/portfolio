import Profile from "./components/Profile";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import styles from "./styles/app.module.scss";
import Certificate from "./components/Certificate";
import Activity from "./components/Activity";
import School from "./components/School";
import Contact from "./components/Contact";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
// import { lazy, Suspense } from "react";

// const ProjectOne = lazy(() => import("./components/ProjectOne"));
// const ProjectTwo = lazy(() => import("./components/ProjectTwo"));
// const ProjectThree = lazy(() => import("./components/ProjectThree"));

function App() {
  return (
    <div className={styles.innerBox}>
      <Profile />
      <Introduce />
      <Contact />
      <Skill />
      <Certificate />
      {/* <Suspense fallback={<h2>프로젝트</h2>}> */}
      <ProjectTwo />
      <ProjectOne />
      <ProjectThree />
      {/* </Suspense> */}
      <Activity />
      <School />
    </div>
  );
}

export default App;
