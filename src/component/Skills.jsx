import htmlUrl from "../assets/images//HTML.jpg"
import cssUrl from "../assets/images/CSS.png"
import jsUrl from "../assets/images/JavaScript-logo.png";
import reactUrl from "../assets/images/React.jpg"
import nodeUrl from "../assets/images/nodejs.png"
import expressUrl from "../assets/images/expressjs1.png"
import mongodbUrl from "../assets/images/mongodb.jpg"
import githubUrl from "../assets/images/github.jpg"
import styles from "./Skills.module.css"
const Skills= ()=>{
    return(
      
   <div className={styles.container}>
    <img src={htmlUrl} alt="html"/>
    <img src={cssUrl} alt="CSS"/>
    <img src={jsUrl} alt="JavaScript"/>
    <img src={reactUrl} alt="React"/>
    <img src={nodeUrl} alt="Nodejs"/>
    <img src={expressUrl} alt="ExpressJs"/>
    <img src={mongodbUrl} alt="MongoDb"/>
    <img src={githubUrl} alt="Github"/>
   </div>
   
    )
}
export default Skills