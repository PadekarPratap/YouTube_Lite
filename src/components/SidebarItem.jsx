import React from 'react'

const SidebarItem = ({text, icon, tabActive, setTabActive, itemIndex}) => {
  return (
    <div className={`text-xl flex items-center text-white py-3 cursor-pointer hover:bg-ytGray rounded-lg px-4 my-[0.15rem] ${tabActive === itemIndex && 'bg-ytGray'}`} onClick={() => setTabActive(itemIndex)}>
        <span className='mr-5'>{icon}</span>
        <span className='text-2xl'>{text}</span>
    </div>
  )
}

export default SidebarItem