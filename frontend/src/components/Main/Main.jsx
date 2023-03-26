import styles from "./Main.module.css"
import Registration from "../Registration/Registration";
function Main(){
    return(
        <div className={styles.main}>
            <Registration/>
        </div>
    )
}
export default Main;