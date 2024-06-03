import { useRef, useState } from 'react'
import avatar1 from './assets/images/beautiful-girl.jpg'
import avatar2 from "./assets/images/beautiful.jpg"
import avatar3 from "./assets/images/kiss.jpg"
import avatar4 from "./assets/images/cropped.webp"
import avatar5 from './assets/images/ai_render.jpg'
import avatar6 from "./assets/images/product.webp"
import avatar7 from "./assets/images/best-friends.jpg"
import benommp3 from './assets/songs/adashdimmi.m4a'
import vafosiz from './assets/songs/bagritosh.m4a'
import birKecha from "./assets/songs/bir-kecha-qolgin.m4a"
import loseYourself from "./assets/songs/lose-yurself.m4a"
import malohat from "./assets/songs/malohat.m4a"
import mayli from "./assets/songs/mayli.m4a"
import mockinbird from "./assets/songs/mockinbird.m4a"
import qaniydi from "./assets/songs/qaniydi.m4a"
import seniKurdim from "./assets/songs/seni-kurdim.m4a"
import surama from "./assets/songs/surama.m4a"
import vipusnoy from "./assets/songs/vipusnoy.m4a"
import zachem from "./assets/songs/zachem-tebya-ya-lyubil.m4a"


import './App.css'

const AudioDetails = [
  {   
    id:1,
    songName:"Adashdimmi",
    songArtist:"Benom",
    songSrc:benommp3,
    songAvatar:avatar1
    },
    
    {
    id:2,
    songName:"Vafosizni sevgan dilim",
    songArtist:"Unknown",
    songSrc:vafosiz,
    songAvatar:avatar2
    },
    
    {
    id:3,
    songName:"Bir kecha qolgin",
    songArtist:"Unknown",
    songSrc:birKecha,
    songAvatar:avatar3
    },
    {
      id:4,
      songName:"Lose yourself",
      songArtist:"Eminem",
      songSrc:loseYourself,
      songAvatar:avatar4
      },
      {
        id:5,
        songName:"Malohat",
        songArtist:"Hamdam S",
        songSrc:malohat,
        songAvatar:avatar5
        },

        {
          id:6,
          songName:"Mayli",
          songArtist:"Ummon",
          songSrc:mayli,
          songAvatar:avatar6
          },
          {
            id:7,
            songName:"Mockinbird",
            songArtist:"Eminem",
            songSrc:mockinbird,
            songAvatar:avatar7
            },  
              {
              id:8,
              songName:"Qaniydi",
              songArtist:"Ozoda N",
              songSrc:qaniydi,
              songAvatar:avatar6
              },  
              {
                id:9,
                songName:"Seni kurdim",
                songArtist:"Shaxriyor",
                songSrc:seniKurdim,
                songAvatar:avatar6
                },
                {
                  id:10,
                  songName:"Surama",
                  songArtist:"Benom",
                  songSrc:surama,
                  songAvatar:avatar6
                  },
                  {
                    id:11,
                    songName:"Vipusnoy",
                    songArtist:"Marat & Arni",
                    songSrc:vipusnoy,
                    songAvatar:avatar6
                    },
                    {
                      id:12,
                      songName:"Zachem polyubil",
                      songArtist:"Marat & Arni",
                      songSrc:zachem,
                      songAvatar:avatar6
                      },
        
  
]
function App() {

  const [currentMusicDetails, setCurrentMusicDetails]=useState({
    songName:'Adashdimmi',
    songArtist:'Benom',
    songSrc:benommp3,
    songAvatar:avatar1
  })
  // usestate variables
  const [audioProgress, setAudioProgress]=useState(0)
const[isAudioPlaying,setIsAudioPlaying]= useState(false)
const [musicIndex, setMusicIndex]= useState(0)
const [musicTotalLength,setMusicTotalLength] = useState('04:11')
const [musicCurrentLength,setMusicCurrentLength] = useState('00:00')
  const currentAudio = useRef()
const handleMusicProgressBar=(e)=>{
  setAudioProgress(e.target.value)
  currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
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
if(musicIndex>= AudioDetails.length-1){
  let setNumber = 0
  setMusicIndex(setNumber)
  updateCurrentMusicDetails(setNumber)
}else{
  let setNumber = musicIndex+1
  setMusicIndex(setNumber)
  updateCurrentMusicDetails(setNumber)
}
}

const handlePrewSong =()=>{
  if(musicIndex === 0){
    let setNumber = AudioDetails.length-1
    setMusicIndex(setNumber)
    updateCurrentMusicDetails(setNumber)
  }else{
    let setNumber = musicIndex - 1
    setMusicIndex(setNumber)
    updateCurrentMusicDetails(setNumber)
  }
}
const updateCurrentMusicDetails =(number)=>{
  let musicObject = AudioDetails[number]
  currentAudio.current.src = musicObject.songSrc
  currentAudio.current.play()
  setCurrentMusicDetails(
    {
    songName:musicObject.songName,
    songArtist:musicObject.songArtist,
    songSrc:musicObject.songSrc,
    songAvatar:musicObject.songAvatar
    }
  )
  setIsAudioPlaying(!isAudioPlaying)
}

const handleAudioUpdate =()=>{
  // input total length of audio 
  let minutes = Math.floor(currentAudio.current.duration / 60)
  let seconds = Math.floor(currentAudio.current.duration % 60)
  let musicTotalLength0 = `${minutes < 10 ?`0${minutes}`: minutes} : ${seconds < 10 ?`0${seconds}`: seconds}`
setMusicTotalLength(musicTotalLength0)
// input music current time
let currentMin = Math.floor(currentAudio.current.currentTime / 60)
let currentSec = Math.floor(currentAudio.current.currentTime % 60)
let musicCurrentT = `${currentMin < 10 ?`0${currentMin}`: currentMin} : ${currentSec < 10 ?`0${currentSec}`: currentSec}`
setMusicCurrentLength(musicCurrentT)

const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration)*100)
setAudioProgress(isNaN(progress) ? 0 :progress)
}
  return (
    <>

      <div className="container">
        <audio src={benommp3}ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate} ></audio>
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
                <p className="music-current-time">{musicCurrentLength}</p>
                <p className="music-total-length">{musicTotalLength}</p>
              </div>
              <input type="range"
               name="musicProgressBar" 
               className='musicProgressBar'
                value={audioProgress}
                onChange={handleMusicProgressBar}
               />
               <div className="music-controlers">
                <i 
                className='fa-solid fa-backward music-controler'
                onClick={handlePrewSong}></i>
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
