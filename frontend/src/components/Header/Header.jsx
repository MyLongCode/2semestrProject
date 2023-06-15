import styles from "./Header.module.css"
import logo from './logo.png';
import search from './search.png'
import { useState } from "react";
function Header(){
    const [, updateState] = useState();
    function clearLocalStorage(e){
        e.preventDefault()
        localStorage.clear();
        console.log(localStorage.getItem('user'));
        window.location.assign('http://localhost:3000/');
    }
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
            {localStorage.getItem('user') == null ?
            <div>
                <div className={styles.registration}>
                    <a href="/registration">Регистрация</a>
                </div>
                <div className={styles.authorization}>
                    <a href='/login'>Войти</a>
                </div>
            </div> 
            :
            <div>
                <div className={styles.registration}>
                    <a href={"/profile/" + localStorage.getItem('user')}>Мой профиль</a>
                </div>
                <div onClick={clearLocalStorage} className={styles.authorization}>
                    <a href='/'>Выйти</a>
                </div>
            </div>
            }
            
            
            
            </div>
        </div>
    )
}
export default Header;