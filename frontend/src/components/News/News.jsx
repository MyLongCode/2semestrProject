import styles from "./News.module.css";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import user from "../user";
function News() {
  const [posts, setPosts] = useState([]);
  const [on1, setOn1] = useState(true);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);

  console.log(user);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/music/api/?format=json';
    axios.get(apiUrl).then((resp) => {
      if (on1 == true){
        const allPosts = [].concat(resp.data)
        .sort((a,b) => a.id > b.id ? -1 : 1)
        setPosts(allPosts);
      }
      if(on2 == true){
        const allPosts = [].concat(resp.data)
        .sort((a,b) => a.count_likes > b.count_likes ? -1 : 1)
        setPosts(allPosts);
      }
    });
  }, []);
  

  function buttonNew(){
    setOn1(true);
    setOn2(false);
    setOn3(false)
    const allPosts = [].concat(posts)
        .sort((a,b) => a.id > b.id ? -1 : 1)
        setPosts(allPosts);

  }
  function buttonTrends(){
    setOn1(false);
    setOn2(true);
    setOn3(false)
    const allPosts = [].concat(posts)
        .sort((a,b) => a.count_likes > b.count_likes ? -1 : 1)
        setPosts(allPosts);
  }
  function buttonFollows(){
    setOn1(false);
    setOn2(false);
    setOn3(true)
  }
  return (
    <div>
      <div className={styles.filtres}>
        <div onClick={buttonNew} className={on1 ? styles.newOn : styles.newOff}>
          <p>Новое</p>
        </div>
        <div onClick={buttonTrends} className={on2 ? styles.trendsOn : styles.trendsOff}>
          <p>Тренды</p>
        </div>
        <div onClick={buttonFollows} className={on3 ? styles.followsOn : styles.followsOff}>
          <p>Отслеживаемое</p>
        </div>
      </div>
      <div className={styles.posts}>
      {posts.map(post => {

                        return (
                            <Post key={post.id} post={post} />
                        )
                        
                })}
    </div>

    </div>
    
  );
}

export default News;