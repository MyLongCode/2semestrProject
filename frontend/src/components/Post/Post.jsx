import styles from "./Post.module.css"
import likeOff from "./likeOff.png"
import likeOn from "./likeOn.png"
import favorite from "./favorite.png"
import axios from "axios";
import Comment from "../Comment/Comment";
import send from "./send.png"
import { useState, useEffect } from "react";

function Post({post}){
    const [comments, setComments] = useState([]);
    const [visibleComments, setVisibleComments] = useState(false);
    const [ownerUserName, setOwnerUserName] = useState('');
    const [isLiked, setIsLiked]  = useState(false);
    const [ownerUser, setOwnerUser] = useState([]);
    const [comment, setComment] = useState('');
    var countComments = 0;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/accounts/api/' + post.owner)
      .then(function (response) {
        setOwnerUser(response.data)
      })
    }, [])
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/comments/api/?format=json';
        axios.get(apiUrl).then((resp) => {
        setComments(resp.data);
        comments.map(comment => {
            if(comment.music == post.id) {
                countComments++;
            }
        })
        console.log(countComments)
        });
    }, []);
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
    const CommentChange = event => {
        setComment(event.target.value);
      };
    function playerOn(){
        localStorage.setItem('audioMusic', post.music);
        localStorage.setItem('audioTitle', post.title);
        localStorage.setItem('audioAuthor', ownerUser.username);
        localStorage.setItem('audioImage', post.image);
        window.dispatchEvent(new Event("storage"));
        window.location.assign('http://localhost:3000/player/');
    }
    function sendComment(e){
            axios.post("http://127.0.0.1:8000/comments/api/", 
                {music: post.id,
                owner: localStorage.getItem('user'),
                text: comment,
                }  )
    }
    return(
        <div className={styles.post}>
            <div onClick={playerOn} className={styles.img}
            style={{
                backgroundImage: `url(${post.image})`
            }}/>
            <div className={styles.info}>
                <p className={styles.name}>{post.title}</p>
                <a href={'/profile/' + ownerUser.id} className={styles.author}>{ownerUser.username}</a>
            </div>
            <div className={styles.stat}>
                <div className={styles.like}>
                    <p>{post.count_likes}</p>
                    <button onClick={fun}><img src={isLiked ? likeOn : likeOff} alt=""/></button>
                </div>
                <div className={styles.favorite}>
                    <button><img src={favorite} alt=""/></button>
                </div>
                <div >
                    <div onClick={() => setVisibleComments(!visibleComments)}className={styles.commentButton}>
                        <p className={styles.commentsTitle}>Комментарии</p>
                    </div>
                    
                     <div className={styles.commentsBlock} style={{visibility: visibleComments == true && comments.length > 0 ? 'visible' : 'hidden'}}>
                        <div className={styles.comments}>   
                                {comments.map(comment => {
                                    if(comment.music == post.id) {

                                        return (
                                            <Comment key={comment.id} comment={comment} />
                                        )
                                    }
                                        
                                })}
                                <div className={styles.addComment} styles={{top: countComments == 0 ? "100px" : "200px"  }}>
                            <input onChange={CommentChange} value={comment} name="comment" type="text" placeholder="Комментарий"/>
                            <img onClick={sendComment}src={send} alt="" width="20px" height="20px"/>
                        </div>
                            </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Post;