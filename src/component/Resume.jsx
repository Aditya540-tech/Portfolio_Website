import Education from "./Education";
import Navbar from "./Navbar"
import styles from './Resume.module.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievement";
const Resume = () =>{
    return(
        <>
        <Navbar/>
       
        <div className={styles.container}>
        <div className={styles.skills}>
            <p className={styles.title}>EDUCATION</p>
            <Education/>
            <p className={styles.title}>SKILLS</p>
            <div className={styles.skillsContainer}>
            <Skills/>
            </div>
            </div>
        <div className={styles.projects}>
            <p className={styles.title}>PROJECTS</p>
          <Projects/>
            <div>
                <p className={styles.achievementTitle}>Achievements</p>
                <Achievements/>
        </div>
        </div>
        </div>
        </>
    )
}
export default Resume