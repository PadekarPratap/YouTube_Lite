import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'
import { abbreviateNumber } from 'js-abbreviation-number'
import { useNavigate } from 'react-router-dom'
import VideoLength from './VideoLength'

const VideoCard = ({video}) => {

    const navigate = useNavigate()

  return (
    <div className='max-w-[300px] min-h-[250px] bg-ytBlack text-white cursor-pointer' role='button' onClick={() => navigate(`/video/${video.videoId}`)}>

        {/* video thumbnail  */}
        <div className='w-full h-[160px] relative'>
            <img src={video.thumbnails[0].url} alt={video.title} className='w-full h-full rounded-lg' />
            <VideoLength length={video?.lengthSeconds} />
        </div>

        {/* video titles and icon  */}
        <div className='mt-3 px-2 pb-3'>
            <div className='flex'>
                {/* icon  */}
                <div className='basis-[20%]'>
                    <div className='w-[35px] h-[35px] rounded-full '>
                    <img src={video.author.avatar[0].url} alt={video.title} className='w-full h-full rounded-full' />
                    </div>
                </div>

                {/* video title, views, time etc  */}
                <div className='basis-[80%]'>

                    {/* title  */}
                    <p className='line-clamp-2 font-bold text-sm'>{video.title}</p>

                    {/* channel name  */}
                    <div className='flex gap-1 items-center mt-2'>
                        <span className='text-xs text-[#a2b3b3] font-semibold'>{video.author.title}</span>
                        <span>{video?.author?.badges[0]?.text === "Verified" ? <FaCheckCircle size={12} color='#a2b3b3' /> : null}</span>
                    </div>

                    {/* views and time  */}
                    <div className='text-xs text-[#a2b3b3] font-semibold'>
                        <span>{abbreviateNumber(video.stats.views, 2)} views</span>
                        <span><GoPrimitiveDot className='inline' /></span>
                        <span>{video.publishedTimeText}</span>
                    </div>


                </div>        
            </div>
        </div>

    </div>
  )
}

export default VideoCard