import styles from "./Header.module.css"
import logo from './logo.png';
import search from './search.png'
function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.center}>
                <div className={styles.icon}>
                <img src={logo} alt="" className={styles.logo}/>
                <a href="/  " className={styles.name}>HitHub</a>
                </div>
            <div className={styles.search}>
                <img src={search} alt="" />
                <p>Поиск...</p>
            </div>
            <div className={styles.registration}>
                <a href="/registration">Регистрация</a>
            </div>
            <div className={styles.authorization}>
                <a href='/login'>Войти</a>
            </div>
            
            </div>
        </div>
    )
}
export default Header;