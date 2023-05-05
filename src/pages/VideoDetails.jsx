import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import ReactPlayer from "react-player";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import dayjs from "dayjs";
import RelatedVideos from "../components/RelatedVideos";

const VideoDetails = () => {
  const { videoId } = useParams();
  console.log(videoId)  //LU_8SyyOWu4

  // const videoId = 'LU_8SyyOWu4' // only when not to make unnecessary API Calls

  const [videoDesc, setVideoDesc] = useState(false)

  const { data, loading } = useFetch(`/video/details/?id=${videoId}`);
  const {data: related, loading: relatedLaoding} = useFetch(`/video/related-contents/?id=${videoId}`)

  const video = { ...data?.data };

  const relatedVideos = [...(related?.data?.contents ?? [])]
  console.log(relatedVideos)

  return (
    <div className="relative md:left-[250px] md:w-[calc(100%-250px)] px-5 py-4 min-h-[calc(100vh-56px)] bg-ytBlack text-white">
      <div className="grid xl:grid-cols-6 gap-3">
        <div className="xl:col-span-4">
          {/* video container   */}
          <div className="w-full h-[200px] md:h-[400px] lg:h-[550px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
          {/* video title and likes/dislikes  */}
          <div className="mt-4">
            <h3 className="text-xl md:text-2xl font-bold">{video?.title}</h3>

            {/* channel name, likes and dislikes  */}
            <div className="mt-3 flex items-center justify-between px-1">
              {/* right section  */}
              <div className="flex items-center gap-3">
                {/* channel icon*/}
                <div className="w-[50px] h-[50px] rounded-full">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    alt={video?.author?.title}
                    className="w-full h-full rounded-full"
                  />
                </div>
                {/* channel name  */}
                <div>
                  <p>
                    {video?.author?.title}{" "}
                    {video?.author?.badges[0]?.text === "Verified" && (
                      <FaCheckCircle className="inline" />
                    )}
                  </p>
                  <span className="text-sm text-gray-500 font-semibold">
                    {video?.author?.stats?.subscribersText}
                  </span>
                </div>
              </div>

              {/* left section  */}
              <div>
                {/* dislikes  */}
                <div className="bg-[#262626] px-5 py-3 rounded-full flex items-center gap-3">
                  <AiOutlineLike className="inline" size={25} />
                  <span>{abbreviateNumber(video?.stats?.likes, 2)} Likes</span>
                </div>
              </div>
            </div>
            
            {/* views time and description  */}
            <div className={`bg-[#262626] hover:bg-[#3c3c3c] px-4 py-3 rounded-lg mt-6 ${videoDesc ? "" : 'cursor-pointer' }`} onClick={() => setVideoDesc(true)}>
              <div className="font-bold">
                  <span className="mr-1">{abbreviateNumber(video?.stats?.views, 2)}</span> 
                  <span className="uppercase mr-4">views</span>
                  <span>{dayjs(video?.publishedDate).format('MMM DD, YYYY')}</span>
              </div>
              <div className="mt-3">
                <p className={`break-all ${videoDesc ? '' : 'line-clamp-2'}`}>{video?.description}</p>
              </div>
            </div>

          </div>
        </div>

        {/* related videos  */}
        <div className="h-[550px] xl:col-span-2 overflow-y-scroll">
            <div className="flex flex-col p-2 gap-3">
              {relatedVideos.map((video) => (
                <RelatedVideos key={video?.video?.videoId} video={video.video} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
