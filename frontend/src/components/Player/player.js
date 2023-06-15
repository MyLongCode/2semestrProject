import { useEffect, useState } from "react";
import useSound from "use-sound";
import styles from "./Player.module.css"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import axios from "axios";

export default function Player() {
    const [music, setMusic] = useState([]);
    const [ownerUser, setOwnerUser] = useState([]);
    var id = 4;
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/music/api/';
        axios.get(apiUrl).then((resp) => {
        setMusic(resp.data);
        });
        
    }, []);
  

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(localStorage.getItem('audioMusic'));

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  const nextMusic = () => {
    pause();
      setIsPlaying(false);
    localStorage.setItem('audioMusic', music[id].music);
    localStorage.setItem('audioTitle', music[id].title);
    axios.get('http://127.0.0.1:8000/accounts/api/' + music[id].owner)
      .then(function (response) {
        setOwnerUser(response.data)
      })
    localStorage.setItem('audioAuthor', ownerUser.username);
    localStorage.setItem('audioImage', music[id].image);
  }
  const prevMusic = () => {
    pause();
      setIsPlaying(false);
    localStorage.setItem('audioMusic', music[id--].music);
    localStorage.setItem('audioTitle', music[id--].title);
    axios.get('http://127.0.0.1:8000/accounts/api/' + music[id--].owner)
      .then(function (response) {
        setOwnerUser(response.data)
      })
    localStorage.setItem('audioAuthor', ownerUser.username);
    localStorage.setItem('audioImage', music[id--].image);
  }
  return (
    <div className={styles.main}>
<div className={styles.component}>
      <img className={styles.musicCover} src={localStorage.getItem('audioImage')} width={"256px"} height={"256px"}/>
      <div>
        <h3 className={styles.title}>{localStorage.getItem('audioTitle')}</h3>
        <a onClick={() => window.location.assign('http://localhost:3000/profile/' + localStorage.getItem('user'))} className={styles.subTitle}>{localStorage.getItem('audioAuthor')}</a>
      </div>
      <div>
        <div className={styles.time}>
          <p>
            {currTime.min}:{currTime.sec < 10 ? "0" : ""}{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec < 10 ? "0" : ""}{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className={styles.slider}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.playButton} onClick={prevMusic}>
          <IconContext.Provider value={{ size: "72px", color: "#9147FF" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className={styles.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "72px", color: "#9147FF" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "72px", color: "#9147FF" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className={styles.playButton} onClick={nextMusic}>
          <IconContext.Provider value={{ size: "72px", color: "#9147FF" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
    </div>
    
  );
}
