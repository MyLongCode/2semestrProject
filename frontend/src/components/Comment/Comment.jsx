import styles from "./Comment.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import avatar from "./avatar.png"

function Comment({comment}){
    const [ownerUser, setOwnerUser] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/accounts/api/' + comment.owner)
      .then(function (response) {
        setOwnerUser(response.data)
      })
    }, [])
    return(
        <div className={styles.comment}>
            <div className={styles.avatar}>
                <img src={ownerUser.image_url == null ? avatar : ownerUser.image_url } alt="" width="24px" height="24px"/>
            </div>
            <div className={styles.owner}>
                <p>{ownerUser.username}</p>
            </div>
            <div className={styles.text}>
                <p>{comment.text}</p>
            </div>
            
        </div>
    )
}
export default Comment;