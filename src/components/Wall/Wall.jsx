import Post from "../Post/Post";
import styles from "./Wall.module.css"
import addPost from "./addPost.png"
import WallPosts from "./WallPosts";
import WallAddPost from "./WallAddPost";
import { useState } from "react";
function Wall({user}){
    const [state, setState] = useState(true);
    
    function stateOff(){
        state ? setState(false) : setState(true);
    }

    return(
       <div className={styles.main}>
            <div onClick={stateOff} className={styles.addPost}>
                <img src={addPost} alt="" width="16px" height="16px"/>
                <a>{state ? "Добавить публикацию" : "Отмена публикации"}</a>
            </div>
            {state ? <WallPosts user={user}/> : <WallAddPost user={user}/>}

        </div>
    )
}
export default Wall;