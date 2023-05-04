import React, { useState } from 'react'
import { categories } from '../utils/constants'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  const [tabActive, setTabActive] = useState(0)
  return (
    <div className='w-[300px] bg-ytBlack h-full px-4 py-2 hover:overflow-y-scroll overflow-hidden'>
        {categories.map((item, itemIndex) => (
            <>
            <SidebarItem tabActive={tabActive} itemIndex={itemIndex} setTabActive={setTabActive}  key={item.name} text={item.type === "home" ? "Home" : item.name} icon={item.icon} />
            {item.divider && <hr  />}
            </>
        ))}
        <hr />
    </div>
  )
}

export default Sidebar