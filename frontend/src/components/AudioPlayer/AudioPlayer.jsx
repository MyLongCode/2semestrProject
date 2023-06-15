import { useEffect, useState } from "react";
import styles from "./AudioPlayer.module.css"
import Play from "./Play.png"
import Stop from "./Stop.png"
import Sound3 from "./Sound3.png"
import Sound from "./sound.png"
import useSound from "use-sound";
const AudioPlayer = ({ audioUrl }) => {

  const [image, setImage] = useState('');
  const [music, setMusic] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [seconds, setSeconds] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(localStorage.getItem('audioMusic'));
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [time, setTime] = useState({
    min: "",
    sec: "",
  }); // текущее положение звука в минутах и секундах


  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    });

  useEffect(() => {
    setImage(localStorage.getItem('audioImage'));  
    setMusic(localStorage.getItem('audioMusic')); 
    setTitle(localStorage.getItem('audioTitle'));
    setAuthor(localStorage.getItem('audioAuthor'));
    setIsPlaying(false); 
    console.log(time.min, time.sec)
  }, '');
  useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec,
          });
          console.log(time)
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);
  window.addEventListener('storage', () => {
    setImage(localStorage.getItem('audioImage'));  
    setMusic(localStorage.getItem('audioMusic')); 
    setTitle(localStorage.getItem('audioTitle'));
    setAuthor(localStorage.getItem('audioAuthor'));
    setIsPlaying(true); 
    play(localStorage.getItem('audioMusic'));
    
})
  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };
  return (
    <div>
        <div className={styles.player}>
            <div className={styles.pause}>
              <img onClick={() => setIsPlaying(!isPlaying)}src={isPlaying == false ? Play : Stop} alt="" width={"24px"} height={"24px"} />
            </div>
            <div className={styles.time}>
              <p>
                {currTime.min}:{currTime.sec}
              </p>
              <p>
                {time.min}:{time.sec}
              </p>
            </div>
        </div>
      
    </div>
  );
};

export default AudioPlayer;