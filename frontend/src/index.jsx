import React from 'react'
import ReactDOM from 'react-dom/client';
import Router from './components/ui/Router';
import Header from './components/Header/Header';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
var user = null;
export default user;
ReactDOM.createRoot(document.getElementById('root')).
render(
    <React.StrictMode>

            <Header/>
            <Router/>
            {localStorage.getItem('isPlayer') == true ? <AudioPlayer/> : <div></div> }

    </React.StrictMode>
)