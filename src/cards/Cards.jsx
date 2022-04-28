import React from 'react'
import './card.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



const Cards = ({type}) => {

let data;
    switch(type){
        case "users":
            data={
                title:"FOYDALANUVCHILAR",
                isMoney: false,
                link:"Ko`rish",
                icon: <PersonOutlineIcon style={ {
                    cursor:"pointer",
                    borderRadius:"5px",
                    padding:"3px",
                    color:"crimson",
                    backgroundColor:"rgb(212, 56, 134, .3)"
                }} />
            };
            break;
        case "orders":
            data={
                title:"BUYURTMALAR",
                isMoney: false,
                link:"Ko`rish",
                icon: <LocalGroceryStoreOutlinedIcon  style={ {
                    cursor:"pointer",
                    borderRadius:"5px",
                    padding:"3px",
                    color:"green",
                    backgroundColor:"rgb(0, 128, 0, .3)"
                }}/>
            };
            break;
        case "earnings":
            data={
                title:"DAROMAT",
                isMoney: true,
                link:"Ko`rish",
                icon: <PaidOutlinedIcon style={ {
                    cursor:"pointer",
                    borderRadius:"5px",
                    padding:"3px",
                    color:"blue",
                    backgroundColor:"rgb(0, 0, 255 , .3)"
                }} />
            };
            break;
        case "balance":
            data={
                title:"BALANSLAR",
                isMoney: true,
                link:"Ko`rish",
                icon: <AccountBalanceWalletOutlinedIcon style={ {
                    cursor:"pointer",
                    borderRadius:"5px",
                    padding:"3px",
                    color:"purple",
                    backgroundColor:"rgb(128, 0, 128, .3)"
                }}/>
            };
        default:
            break;

    }
  return (

    <div className='card'>
        <div className="top">
            <span className='title'>{data.title}</span>
            <div className="percentage positive ">
                <div className="icon-wrap positive"><KeyboardArrowUpIcon/></div>
                <span  >20%</span>
            </div>
        </div>
        <h5 className='quantity'>{data.isMoney && "$"}100</h5>
        <div className="bottom">
            <span>{data.link}</span>
            <div className="icons-wrap">
            {data.icon}
            </div>
        </div>
    </div>
  )
}

export default Cards