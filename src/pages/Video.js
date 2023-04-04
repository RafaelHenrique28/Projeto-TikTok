import React, { useRef, useState } from 'react'

import VideoFooter from "./components/footer/VideoFooter"
import "./Video.css"
import VideoSidebar from "./components/sidebar/VideoSidebar"


function Video({likes, messages, shares, name, description, music, url}) {

  const videoRef = useRef (null)
  const [play, setPlay] = useState(false);
 
  function handdleStart() {

    if(play){

      videoRef.current.pause()
      setPlay(false);

    } else {
      videoRef.current.play()
      setPlay(true);
    }

    

 }
  
return (
    <div className='video'>
    <video 
      className='video__player'
      loop
      ref={videoRef}
      onClick={handdleStart}
  
      src={url}
       >


     </video>
     < VideoSidebar
     likes={likes}
     messages={ messages }
     shares={shares}
     />
     < VideoFooter

     name={ name }
     description={ description }
     music={ music }
     
     />

   
    </div>
  )
}

export default Video