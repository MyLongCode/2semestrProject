import styles from "./ProfileHeader.module.css"
import axios from "axios";
import avatar from "./avatar.png"
import { useEffect, useState } from "react";
function ProfileHeader({user}){

    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/accounts/api/' + user;
        axios.get(apiUrl).then((resp) => {
        const allPosts = resp.data;
        setUserInfo(allPosts);
        });
    }, []);
    return(
            <div className={styles.main}>
                <div className={styles.ground}>
                    
                </div>
                <div className={styles.about}>
                        <a href="">Обо мне</a>
                    </div>
                <div className={styles.username}>
                    <p>{userInfo.username}</p>
                </div>
                <div className={styles.avatar}>
                    <img src={userInfo.image_url == null ? avatar : userInfo.image_url } alt="" width="64px" height="64px"/>
                </div>
                <div className={styles.place}>
                    <p>Екатеринбург, Россия</p>
                </div>
                <div className={styles.edit}>
                        {user == localStorage.getItem('user') ? <a href="">Редактировать профиль</a> : <p></p>}
                </div>
                <div className={styles.line}>
                    <div className={styles.buttons}>
                        <div className={styles.mainButton}>
                            <a href="" >Главная</a>
                        </div>
                        
                        <div className={styles.messageButton}>
                            <a href="" >Сообщения</a>
                        </div>
                        <div className={styles.musicButton}>
                            <a href="" >Моя музыка</a>
                        </div>
                        <div className={styles.followersButton}>
                            <a href="" >Подписки</a>
                        </div>
                    </div>    
                </div>
            </div>
    )
}
export default ProfileHeader;