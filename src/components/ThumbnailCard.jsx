import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaCheckCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ThumbnailCard = ({video}) => {

    const navigate = useNavigate()

  return (
    <div className='flex gap-5 md:flex-row flex-col cursor-pointer hover:bg-ytGray rounded-lg px-4 py-5' onClick={() => navigate(`/video/${video?.videoId}`)}>
        {/* video image  */}
        <div className='w-full h-[250px] basis-[60%] lg:basis-[40%]'>   
            <img src={video?.thumbnails[0]?.url} alt={video?.title} className='w-full h-full rounded-lg' />
        </div>  
        
        {/* video title and stuff  */}
        <div className='basis-[40%] lg:basis-[60%]'>
            <h5 className='text-2xl line-clamp-3 font-bold'>{video?.title}</h5>
            
            <p className='line-clamp-3 text-base text-gray-500 font-semibold mt-4'>{video?.descriptionSnippet}</p>

            {/* channel name and icon */}
            <div className='mt-4 flex gap-3 items-center'>
                {/* channel icon  */}
                <img src={video?.author?.avatar[0]?.url} alt="" className='w-[40px] h-[40px] rounded-full' />
                
                {/* channel name, views and time  */}
                <div>
                    <p className='text-gray-500 text-sm'>{video?.author?.title} {video?.author?.badges[0]?.text === "Verified" && <FaCheckCircle className='inline ml-1' />}</p>
                    <span className='text-gray-500 text-sm'>{abbreviateNumber(video?.stats?.views, 2)} views <GoPrimitiveDot className='inline' /> {video?.publishedTimeText}</span>
                </div>


            </div>

        </div>

    </div>
  )
}

export default ThumbnailCard