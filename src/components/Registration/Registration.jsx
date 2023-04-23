import styles from "./Registration.module.css"
import axios from "axios";
import { useState } from "react";



function Registration(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const LoginChange = event => {
        setLogin(event.target.value);
      };
    const PasswordChange = event => {
        setPassword(event.target.value);
      };
      const rptPasswordChange = event => {
        setRepeatPassword(event.target.value);
      };
    function registration(e){
        
        if (password !== repeatPassword){
            e.preventDefault()
            setError("Пароли не совпадают")
        }else{
            axios.post("http://127.0.0.1:8000/accounts/api/users/", 
                {username: login,
                password: password,
                first_name: "firstName",
                last_name: "lastName",
                place: "place",
                biography: "bio"
                }  )
    }
    }

    return(
        <div className={styles.main}>
            <form className={styles.form} >
            <h1 className={styles.rega}>Регистрация</h1>
            <h2></h2>
            <div className={styles.inputs}>
                <input onChange={LoginChange} value={login} name="login" type="text" placeholder="Логин"/>
                <input onChange={PasswordChange} value={password} name="password" type="password" placeholder="Пароль"/>
                <input onChange={rptPasswordChange} value={repeatPassword} name="repeatPassword" type="password" placeholder="Повторите пароль"/>
            </div>
            <div className={styles.account}>
                <a href="/login">Уже есть аккаунт?</a>
            </div>
            <div className={styles.error}>
                <p >{error}</p>
            </div>
            <div className={styles.button}>
                <button onClick={registration}>Зарегистрироваться</button>
            </div>
            
        </form>
        </div> 
    )

}
export default Registration;

