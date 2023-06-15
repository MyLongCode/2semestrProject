import styles from "./Registration.module.css"
import axios from "axios";
import { useState } from "react";
import avatar from './avatar.png';


function Registration(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState(null);
    
    function uploadImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
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
            setImage(avatar);
            axios.post("http://127.0.0.1:8000/accounts/api/", 
                {username: login,
                password: password,
                first_name: "firstName",
                last_name: "lastName",
                place: "place",
                biography: "bio",
                image_url: image,
                }, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    } }  )
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
                <input onChange={(e) => uploadImage(e)} name="image" type="file" className={styles.addFiles}
                        accept="image/*"/>
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

