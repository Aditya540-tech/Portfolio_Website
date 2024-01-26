import styles from "./Projects.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
    return(
    <>
    <div className={styles.projectsList}>
                <div className={styles.projectContainer}>
                    <div className={styles.link}>
                <h1 className={styles.projectsTitle}>Ecommerce Website </h1>
                <span className={styles.icons}><FaExternalLinkAlt /></span>
                </div>
                <p> It’s a ecommerce website which allows user to create account, manage cart. After creating account user can adding products
in cart.</p>
<p> It implemented features such as product search using category and search bar, shopping carts, adding product, filter product.</p>
<p> Tech Stack Used:HTML, CSS, JavaScript, ReactJS, MongoDB, NodeJS, Express</p>
</div>
<div className={styles.projectContainer}>
    <div className={styles.link}>
<h1 className={styles.projectsTitle}> IMDB Clone </h1>
<span className={styles.icons}><FaExternalLinkAlt /></span>
</div>
                <p> A web application provides interface for user to get Upcoming, Top rated and Popular movies</p>
<p> It implemented features such as filtering, searching and sorting</p>
<p> Tech Stack Used: HTML, CSS, JavaScript, ReactJS</p>
  </div>
  </div>
    </>
    )
}

export default Projects