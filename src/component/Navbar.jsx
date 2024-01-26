import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
    return(
        <div className={styles.container}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
            <Link to="/resume" className={styles.link}>Resume</Link>
        </div>
    )
}
export default Navbar