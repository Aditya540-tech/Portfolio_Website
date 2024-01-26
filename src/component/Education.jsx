import styles from "./Education.module.css"

const Education = ()=>{
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>GALGOTIAS UNIVERSITY</h3>
            <p className={styles.description}>Bachelor of Technology - Computer Science And Engineering </p> 
                <p className={styles.description}>GPA: 8.1/10 - 2020-2024</p>

                <h3 className={styles.title}>KENDRIYA VIDYALAYA NO 1</h3>
            <p className={styles.description}>12th Class - CBSE Board </p> 
                <p className={styles.description}>PCM Percentage: 68.2 - 2019</p>

                <h3 className={styles.title}>KENDRIYA VIDYALAYA NO 1</h3>
            <p className={styles.description}>10th Class - CBSE Board </p> 
                <p className={styles.description}>CGPA: 8.0/10 - 2017</p>
        </div>
    )
} 

export default Education