import React from 'react'

const VideoLength = ({length}) => {

    function secondsToTime(length){
        const h = Math.floor(length / 3600).toString().padStart(2,'0'),
              m = Math.floor(length % 3600 / 60).toString().padStart(2,'0'),
              s = Math.floor(length % 60).toString().padStart(2,'0');
        
        return h + ':' + m + ':' + s;
        //return `${h}:${m}:${s}`;
    }
    
  return (
    <div className='absolute bottom-[7px] right-[15px] bg-black px-1 pb-[2px] rounded-lg'>
        <span className='text-xs'>{secondsToTime(length)}</span>
    </div>
  )
}

export default VideoLength