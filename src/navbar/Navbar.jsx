import React, {useContext} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { Context } from '../context/Context';


const Navbar = () => {
    const {dispatch} = useContext(Context)
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="search" placeholder='Qidirish...' />
                <SearchIcon className='icon'/>
            </div>
            <div className="nav-icons">
                <div className="icon-wrapper">
                    <LanguageIcon/>
                    <span>Uzbek</span>
                </div>
                <div className="icon-wrapper" onClick={()=> dispatch({type:"TOGGLE"})}>
                    <DarkModeOutlinedIcon />
                </div>
                <div className="icon-wrapper">
                    <NotificationsNoneOutlinedIcon/>
                    <span className='badge'>1</span>
                </div>
                <div className="icon-wrapper">
                    <ChatBubbleOutlineIcon />
                    <span className='badge'>3</span>
                </div>
                <div className="icon-wrapper">
                    <ListIcon/>
                </div>
                <div className="avatar">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Favatar&psig=AOvVaw0Sz_RDNOAYL4qqHz3TH8OJ&ust=1648472098494000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi4_qOr5vYCFQAAAAAdAAAAABAD" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar