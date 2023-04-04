import React from 'react'
import "./Videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({name, description, music}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'> 
         <h3>@{ name } </h3>
         <p>{ description }</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooter__icon'/>
         <div className='videoFootermusic__text'> 
         <p>{music}</p>
         </div>
         </div>
        </div>
        <img
        className='videoFooter__record ' alt="imagem de um vinel girando" src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?fbclid=IwAR2tgKTVa0-1Qfy6H6cLP0wSfscPbPYDSgsqnzYIwa86VoTR5FyxULgGRWs"
        />
      </div>
  )
}

export default VideoFooter




