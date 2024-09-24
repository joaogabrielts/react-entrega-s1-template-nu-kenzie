import logo from "/public/Nu Kenzie.png"
import styles from "./styles.module.scss"

export const Header = () => {
    return(
        <header className={styles.Header}>
            <img src={logo}  alt="Logo kenzie" />
        </header>
    )
}