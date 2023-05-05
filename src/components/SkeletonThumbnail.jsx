import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonThumbnail = ({cards}) => {
  return (
    Array(cards).fill(0).map((item, itemIndex) => (
        <div className="flex flex-col md:flex-row gap-3 mb-3" key={itemIndex}>
        <div className="w-full h-[250px] md:basis-[50%]">
          <Skeleton width={"100%"} height={"100%"} />
        </div>
  
        <div className="md:basis-[50%]">
          <Skeleton count={2} />
  
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] rounded-full">
              <Skeleton circle width={"100%"} height={"100%"} />
            </div>
            <div>
              <Skeleton count={2} width={"150px"} height={"18px"} />
            </div>
          </div>
        </div>
      </div>
        ))
   
  );
};

export default SkeletonThumbnail;
