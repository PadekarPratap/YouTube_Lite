import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import ThumbnailCard from "../components/ThumbnailCard";
import SkeletonThumbnail from "../components/SkeletonThumbnail";

const SearchResultsPage = () => {
  const searchQuery = useSelector((state) => state.Youtube.searchQuery);

  const { data: searchResult, loading } = useFetch(`/search/?q=${searchQuery}`);

  console.log(searchResult);
  const searchRes = [...(searchResult?.data?.contents ?? [])];
  return (
    <div className="relative md:left-[250px] md:w-[calc(100%-250px)] min-h-[calc(100vh-56px)] bg-ytBlack text-white">
      <div className="px-5 py-4">
        {loading ? <SkeletonThumbnail cards={20} /> : searchRes?.map((thumbnail, index) => {
          if(thumbnail?.type !== "video") return
         return <ThumbnailCard key={index} video={thumbnail?.video} />;
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;
