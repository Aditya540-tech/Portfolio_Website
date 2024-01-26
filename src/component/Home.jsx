import styles from './Home.module.css'
import Navbar from './Navbar'
const Home = () =>{
    return(
        <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>ADITYA </h1>
                <h1><span className={styles.middleLastName}>NARAYAN TIWARI</span></h1>
                <span className={styles.role}>FRONTENED DEVELOPER /</span>
                <span className={styles.role} >MERN DEVELOPER </span>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Contact</button>
                    <button className={styles.button}>Resume</button>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default Home