import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeketonCard = ({cards}) => {
  return (
    Array(cards).fill(0).map((card, cardIndex) => (
        <React.Fragment key={cardIndex}>
      <div className="max-w-[300px] min-h-[250px]">
        <div className="w-full h-[200px]">
          <Skeleton height={200} />
        </div>
        <div className="flex p-3 gap-3">
        <div className="basis-[20%]">
           <div>
           <Skeleton circle height={50} />
           </div>
        </div>
        <div className="basis-[80%]">
          <span>
            <Skeleton />
          </span>
          <span>
            <Skeleton />
          </span>
          <span>
            <Skeleton />
          </span>
        </div>
        </div>
      </div>
    </React.Fragment>
    ) )
    
  );
};

export default SkeketonCard;
