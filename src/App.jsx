import { useRef, useState } from 'react'
import image1 from './assets/images/ai_render.jpg'
import benom from './assets/images/beautiful-girl.jpg'
import benommp3 from './assets/songs/adashdimmi.m4a'
import AudioDetails from './musicsSourse.json'
import './App.css'

function App() {

  const [currentMusicDetails, setCurrentMusicDetails]=useState({
    songName:'Adashdimmi',
    songArtist:'Benom',
    songSrc:benommp3,
    songAvatar:benom
  })
  // usestate variables
  const [audioProgress, setAudioProgress]=useState(0)
const[isAudioPlaying,setIsAudioPlaying]= useState(false)

  const currentAudio = useRef()
const handleMusicProgressBar=(e)=>{
  setAudioProgress(e.target.value)
}

let avatarClass =['objectFitCover', 'objectFitContain', 'none']
const[avatarClassIndex, setAvatarClassIndex]=useState(0)

//change avatar
const handleAvatar=()=>{
  if(avatarClassIndex >= avatarClass.length-1){
    setAvatarClassIndex(0)
  }else{
    setAvatarClassIndex(avatarClassIndex+1)
  }
}
//Play music
const handleAudioPlay=()=>{
  if(currentAudio.current.paused){
    currentAudio.current.play();
    setIsAudioPlaying(!isAudioPlaying)
  }else{
    currentAudio.current.pause()
    setIsAudioPlaying(!isAudioPlaying)
  }
  
}


const handleNextSong =()=>{

}
  return (
    <>

      <div className="container">
        <audio src={currentMusicDetails.songSrc}ref={currentAudio} ></audio>
        <div className="black-screen"></div>
            <div className="music-container">
              <p className="music-palyer">Music Player</p>
              <p className="music-head-name">{currentMusicDetails.songName}</p>
              <p className="music-artist-name">{currentMusicDetails.songArtist}</p>
              <img src={currentMusicDetails.songAvatar}
              onClick={handleAvatar}
              className={avatarClass[avatarClassIndex]}
               alt="song Avatar"
                id='song-avatar' />
              <div className="music-timer-div">
                <p className="music-current-time">00 : 00</p>
                <p className="music-total-length">03 : 59</p>
              </div>
              <input type="range"
               name="musicProgressBar" 
               className='musicProgressBar'
                value={audioProgress}
                onChange={handleMusicProgressBar}
               />
               <div className="music-controlers">
                <i className='fa-solid fa-backward music-controler'></i>
                <i 
                className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle':'fa-circle-play'} play-btn`}
                onClick={handleAudioPlay}></i>
                <i className='fa-solid fa-forward music-controler'
                onClick={handleNextSong}></i>
               </div>
            </div>
            <div className="change-back-btn">
              Change Background
            </div>
      </div>
    </>
  )
}

export default App
