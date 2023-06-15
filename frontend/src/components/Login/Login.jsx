import styles from "./Login.module.css"
import { useState } from "react";
import axios from "axios";
import user from "../user";
import Profile from "../Profile/Profile";
import ReactDOM from "react-dom";
   
function Login(props){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('Авторизация');


    const LoginChange = event => {
        setLogin(event.target.value);
      };
    const PasswordChange = event => {
        setPassword(event.target.value);
      };

    function auth(e){
        e.preventDefault()
        const apiUrl = "http://127.0.0.1:8000/accounts/api/";
            axios.get(apiUrl, 
                {username: login,
                password: password
                }  ).then((resp) => {
                    var arr = resp.data;
                    var length = resp.data.length;
                    
                    for (var i = 0; i < length; i++){
                        if (arr[i].username == login && arr[i].password == password){
                            console.log("password accesed")
                            user.user = arr[i];
                            console.log(localStorage.getItem('user'))
                            localStorage.setItem('user', i+1);
                            window.location.assign('http://localhost:3000/profile/' + localStorage.getItem('user'));
                            break;
                        }
                    }
                    });
                    
       }
    return(
        <div className={styles.main}>
            <form className={styles.form}>
            <h1>{value}</h1>
            <div className={styles.inputs}>
                <input onChange={LoginChange} value={login} name="login" type="text" placeholder="Логин"/>
                <input onChange={PasswordChange} value={password} name="password" type="password" placeholder="Пароль"/>
            </div>
            <div className={styles.account}>
                <a href="/registration">Создать аккаунт</a>
            </div>
            <div className={styles.button}>
                <button onClick={auth}>  Войти  </button>
            </div>
            
        </form>
        </div>
    )
}
export default Login;
