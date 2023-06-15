import styles from "./Wall.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function WallAddPost({user}){
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [music, setMusic] = useState(null);

    const TitleChange = event => {
        setTitle(event.target.value);
      };
      function Post(e){
        e.preventDefault()
        const likes = Math.round(100 + Math.random() * (1000 - 100));
            axios.post("http://127.0.0.1:8000/music/api/", 
                {title: title,
                image: image,
                music: music,
                owner: user,
                count_likes: likes,
                }, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    } } )
        
    }

    function uploadImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    function uploadMusic(e){
        console.log(e.target.files)
        setMusic(e.target.files[0])
    }
    return(
            <div className={styles.createPost}>
                 <form className={styles.form} >
                    <h1>Создание поста</h1>
                    <div className={styles.inputs}>
                        <input onChange={TitleChange} value={title} name="title" type="text" placeholder="Введите заголовок"/>
                        <input onChange={(e) => uploadImage(e)} name="image" type="file" className={styles.addFiles}
                        accept="image/*"/>
                        <input onChange={(e) => uploadMusic(e)} name="music" type="file" className={styles.addFiles}
                        accept="audio/*"/>
                        <div className={styles.button}>
                        <button className="uploadBtn" onClick={Post}>Опубликовать</button>
                    </div>
                    </div>
                    
                </form> 
            </div>
    )
}
export default WallAddPost;