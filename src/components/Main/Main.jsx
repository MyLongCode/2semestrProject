import styles from "./Main.module.css"
import News from "../News/News"
import Header from '../Header/Header'
function Main(){
    return(
        <div className={styles.main}>
            <Header/>
            <News/>
        </div>
    )
}
export default Main;