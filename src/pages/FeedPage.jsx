import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import VideoCard from "../components/VideoCard";
import SkeketonCard from "../components/SkeketonCard";

const FeedPage = () => {
  const query = useSelector((state) => state.Youtube.query);

  const { data, loading } = useFetch(`/search/?q=${query}`);

  const feed = [...(data?.data?.contents ?? [])];
  // console.log(feed);

  return (
    <div className="relative md:left-[250px] md:w-[calc(100%-250px)] bg-ytBlack min-h-[calc(100vh-56px)]">
      <div className="px-4 py-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center">
          {loading ? (
            <SkeketonCard cards={50} />
          ) : feed?.map((feedItem, index) => {
            if(feedItem.type !== "video") return 
            return <VideoCard key={index} video={feedItem.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
