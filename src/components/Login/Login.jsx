import styles from "./Login.module.css"
function Login(props){
    return(
        <div className={styles.main}>
            <form className={styles.form}>
            <h1>Авторизация</h1>
            <div className={styles.inputs}>
                <input name="login" type="text" placeholder="Логин"/>
                <input name="password" type="password" placeholder="Пароль"/>
            </div>
            <div className={styles.account}>
                <a href="/registration">Создать аккаунт</a>
            </div>
            <div className={styles.button}>
                <button>  Войти  </button>
            </div>
            
        </form>
        </div>
    )
}
export default Login;