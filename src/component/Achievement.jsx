import styles from "./Achievement.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () =>{
    return(
        <>
                <div className={styles.link}>
<p className={styles.achivementTitle}> Codeforce -Maximum Rating 914 </p>
<span className={styles.achievementIcons}><FaExternalLinkAlt /></span>
</div>
<div className={styles.link}>
<p className={styles.achivementTitle}> Codechef -Maximum Rating 1435 </p>
<span className={styles.achievementIcons}><FaExternalLinkAlt /></span>
</div>
<div className={styles.link}>
<p className={styles.achivementTitle}>GeeksForGeeks -Points 1170+       </p>
<span className={styles.achievementIcons}><FaExternalLinkAlt /></span>
</div>
<div className={styles.link}>
<p className={styles.achivementTitle}> Leetcode -Maximum Rating 1507 </p>
<span className={styles.achievementIcons}><FaExternalLinkAlt /></span>
</div>
               
        </>
    )
}

export default Achievements