import Post from "../Post/Post";
import styles from "./Wall.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function WallPosts({user}){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/music/api/?format=json';
        axios.get(apiUrl).then((resp) => {
        const allPosts = resp.data;
        setPosts(allPosts);
        });
    }, []);
    
    return(
            <div className={styles.posts}>
                {posts.map(post => {
                    if(post.owner == user) 
                        return (
                            <Post key={post.id} post={post} />
                        )
                        
                })}
            </div>
    )
}
export default WallPosts;