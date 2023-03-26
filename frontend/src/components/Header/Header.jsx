import styles from "./Header.module.css"
import logo from './logo.svg';
import search from './search.png'
function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.center}>
                <div className={styles.icon}>
                <img src={logo} alt="" className={styles.logo}/>
                <p className={styles.name}>Lorem ipsum</p>
                </div>
            <div className={styles.search}>
                <img src={search} alt="" />
                <p>Поиск...</p>
            </div>
            <div className={styles.registration}>
                <button>Региcтрация</button>
            </div>
            <div className={styles.authorization}>
                <button>Войти</button>
            </div>
            
            </div>
        </div>
    )
}
export default Header;