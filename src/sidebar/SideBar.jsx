import React, {useContext} from 'react'
import './sidber.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { Context } from '../context/Context';

const SideBar = () => {
    const {dispatch} = useContext(Context)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:"none"}}>
            <h4 className="logo">KhoAs</h4>

            </Link>
        </div>
        <hr/>
        <div className="main">
            <ul>
                <p>ASOSIY</p>
                <li>
                    <DashboardIcon className = "icon"/>
                    <span>Boshqaruv paneli</span>
                </li>
                <p>LISTLAR</p>
                <Link to='/users' style={{textDecoration:"none"} }>
                <li className="active">
                    <PersonIcon className = "icon active "/>
                    <span className="active">Foydalanuvchi</span>
                </li>
                </Link>
                <Link to='/products' style={{textDecoration:"none"}}>
                <li>
                    <LocalGroceryStoreIcon className = "icon"/>
                    <span>Mahsulotlar</span>
                </li>
                </Link>
                <li>
                    <BookmarkBorderIcon className = "icon"/>
                    <span>Buyurtmalar</span>
                </li>
                <li>
                    <LocalShippingIcon className = "icon"/>
                    <span>Yetkazib berish</span>
                </li>
                <li>
                    <AssessmentIcon className = "icon"/>
                    <span>Statistika</span>
                </li>
                <li>
                    <NotificationsNoneIcon className = "icon"/>
                    <span>Bildirishnoma</span>
                </li>
                <p>SERVIS</p>
                <li>
                    <SettingsSystemDaydreamIcon className = "icon"/>
                    <span>Tizim salomatligi</span>
                </li>
                <li>
                    <PsychologyIcon className = "icon"/>
                    <span>Jurnallar</span>
                </li>
                <li>
                    <SettingsIcon className = "icon"/>
                    <span>Sozlamalar</span>
                </li>
                <p>FOYDALANUVCHI</p>
                <li>
                    <AccountCircleIcon className = "icon"/>
                    <span>Profil</span>
                </li>
                <li>
                    <LogoutIcon className = "icon"/>
                    <span>Chiqish</span>
                </li>
            </ul>
        </div>
        <div className="bottoms">
            <div className="colorOption">
                <div onClick={()=> dispatch({type:"LIGHT"})} className="whites"></div>
                <div onClick={()=> dispatch({type:"DARK"})}  className="blacks"></div>
            </div>
        </div>
    </div>
  )
}

export default SideBar