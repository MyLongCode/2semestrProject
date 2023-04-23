import styles from "./Post.module.css"
import likeOff from "./likeOff.png"
import likeOn from "./likeOn.png"
import favorite from "./favorite.png"
import axios from "axios";
import { useState, useEffect } from "react";

function Post({post}){
    
    const [ownerUserName, setOwnerUserName] = useState('');
    const [isLiked, setIsLiked]  = useState(false);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/accounts/api/')
      .then(function (response) {
        setOwnerUserName(response.data[post.owner - 1])
      })
    }, [])
    function addLike(){
        axios.put('http://127.0.0.1:8000/music/api/' + post.id, 
            {
                "title": post.title,
                "image": post.image,
                "music": post.music,
                "owner": post.owner,
                "count_likes": post.count_likes + 1
            }, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                } } )
    }
    function fun(){
        if (isLiked == false){
            setIsLiked(true)
            post.count_likes++
        }
        else{
            setIsLiked(false)
            post.count_likes--
        }
        console.log(post.image)
        addLike();
    }
    return(
        <div className={styles.post}>
            <div className={styles.img}
            style={{
                backgroundImage: `url(${post.image})`
            }}/>
            <div className={styles.info}>
                <p className={styles.name}>{post.title}</p>
                <a href={'/profile/' + ownerUserName.id} className={styles.author}>{ownerUserName.username}</a>
            </div>
            <div className={styles.stat}>
                <div className={styles.like}>
                    <p>{post.count_likes}</p>
                    <button onClick={fun}><img src={isLiked ? likeOn : likeOff} alt=""/></button>
                </div>
                <div className={styles.favorite}>
                    <button><img src={favorite} alt=""/></button>
                </div>
            </div>
        </div>
    )
}
export default Post;