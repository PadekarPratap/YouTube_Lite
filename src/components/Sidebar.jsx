import React, { useState } from "react";
import { categories } from "../utils/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <div className="w-[300px] bg-ytBlack h-full px-4 py-2 hover:overflow-y-scroll overflow-hidden">
      {categories.map((item, itemIndex) => (
        <React.Fragment key={item.name}>
          <SidebarItem
            tabActive={tabActive}
            itemIndex={itemIndex}
            setTabActive={setTabActive}
            text={item.type === "home" ? "Home" : item.name}
            icon={item.icon}
            type={item.type}
          />
          {item.divider && <hr />}
        </React.Fragment>
      ))}
      <hr />
    </div>
  );
};

export default Sidebar;
