import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const RelatedVideos = ({video}) => {

    const navigate = useNavigate()

  return (
    <div className='flex cursor-pointer gap-3' onClick={() => navigate(`/video/${video.videoId}`)}>

        {/* video images  */}
        <div className='basis-[50%]'>
            <img src={video?.thumbnails[0]?.url} className='rounded-lg w-full' />
        </div>

        {/* video description and stuff  */}
        <div className='basis-[50%]'>
            {/* title  */}
            <p className='line-clamp-2 text-sm font-bold'>{video?.title}</p>
            
            {/* channel name, views and time  */}
            <div>
                <span className='text-xs text-gray-400 font-semibold'>{video?.author?.title} {video?.author?.badges[0]?.text === "Verified" && <FaCheckCircle className='inline' />}</span>
                <span className='block text-xs text-gray-400 font-semibold'>{abbreviateNumber(video?.stats?.views, 2)} views <GoPrimitiveDot className='inline' /> {video?.publishedTimeText}</span>
            </div>

        </div>

    </div>
  )
}

export default RelatedVideos