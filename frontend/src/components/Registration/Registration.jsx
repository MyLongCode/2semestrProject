import styles from "./Registration.module.css"
function Registration(){
    return(
        <form className={styles.form}>
            <h1>Регистрация</h1>
            <h2>Шаг 1/4</h2>
            <div className={styles.inputs}>
                <input name="login" type="text" placeholder="Логин"/>
                <input name="password" type="password" placeholder="Пароль"/>
                <input name="repeatPassword" type="password" placeholder="Повторите пароль"/>
            </div>
            <div className={styles.button}>
                <button>Зарегистрироваться</button>
            </div>
            
        </form>
    )
}
export default Registration;