import { Header } from "../Header"
import styles from "./styles.module.scss"


export const FormTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}