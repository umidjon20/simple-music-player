import { useState } from 'react'
import image1 from './assets/images/ai_render.jpg'
import './App.css'

function App() {

  // usestate variables
  const [audioProgress, setAudioProgress]=useState(60)
const handleMusicProgressBar=(e)=>{
  setAudioProgress(e.target.value)
}
  return (
    <>

      <div className="container">
        <div className="black-screen"></div>
            <div className="music-container">
              <p className="music-palyer">Music Player</p>
              <p className="music-head-name">Relaxing</p>
              <p className="music-artist-name">Stars</p>
              <img src={image1} alt="song Avatar" id='song-avatar' />
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
                <i className='fa-solid fa-circle-play play-btn'></i>
                <i className='fa-solid fa-forward music-controler'></i>
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
