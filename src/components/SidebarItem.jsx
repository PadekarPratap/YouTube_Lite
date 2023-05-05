import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_SIDEBAR, UPDATE_QUERY } from '../redux/youtubeSlice'

const SidebarItem = ({text, icon, tabActive, setTabActive, itemIndex, type}) => {

  const dispatch = useDispatch()

  const handleTab = () =>{
    setTabActive(itemIndex)
    switch(type){
      case 'home':
        dispatch(UPDATE_QUERY(text))
        dispatch(CHANGE_SIDEBAR())
        window.scrollTo(0,0)
        
        break
        case 'category':
          dispatch(UPDATE_QUERY(text))
          dispatch(CHANGE_SIDEBAR())
          window.scrollTo(0,0)
      break
      default:
        return null
    }
  }

  return (
    <div className={`text-xl flex items-center text-white py-3 cursor-pointer hover:bg-ytGray rounded-lg px-4 my-[0.15rem] ${tabActive === itemIndex && 'bg-ytGray'}`} onClick={handleTab}>
        <span className='mr-5'>{icon}</span>
        <span className='text-2xl'>{text}</span>
    </div>
  )
}

export default SidebarItem