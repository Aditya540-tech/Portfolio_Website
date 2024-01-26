import Navbar from "./Navbar"
import styles from "./Contact.module.css"
const Contact = () => {
    return(
        <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.subContainer}>
            <h1>ABOUT</h1>
            <p>adityanarayan183@gmail.com</p>
            <p>New Delhi</p>
            <p>Kailash Puri South West Delhi</p>
            </div>

            <div className={styles.objective}>
                <p>I am a final year student poised to enter the tech industry with a passion for all things tech. My goal is to secure job
opportunities where I can apply my academic knowledge to drive innovation. I am not merely seeking employment; I
am on a mission to transform theoretical expertise into practical solutions. I thrive on challenges and am committed to
making a significant impact within a dynamic tech company. Equipped with technical skills, a touch of creativity, and
problem-solving abilities, I am eager to immerse myself in the exciting world of technology, shaping a future where
possibilities are boundless.</p>
            </div >
        </div>
        </>
    )
}
export default Contact