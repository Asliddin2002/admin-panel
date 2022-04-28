
import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



const Featured = () => {
  return (
    <div className='feature'>
        <div className="top">
            <div className="title"><span>Jami Daromat</span>
            < MoreVertIcon  className="icon"/>
            </div>
        </div>
        <div className="bottom">
            <div className="bar">
                <CircularProgressbar value={65} text={"65%"} strokeWidth={5}/>
            </div>
            <p className="title"> Bugunlik umumiy savdo</p>
            <p className="amount">$10520</p>
            <p className="desc">
Oldingi, tranzaktsiyalarni qayta ishlash. Oxirgi to'lovlar hisobga olinmaydi</p>
            <div className="target-wraper">
                <div className="target"><span className='title'>Target</span>
                    <div className="target-amount negative">
                    <KeyboardArrowDownIcon/>
                    <span>$12.4k</span>
                    </div>
                </div>
                <div className="target"><span className='title'>Target</span>
                    <div className="target-amount positive">
                    <KeyboardArrowUpIcon/>
                    <span>$12.4k</span>
                    </div>
                </div>
                <div className="target"><span className='title'>Target</span>
                    <div className="target-amount positive">
                    <KeyboardArrowUpIcon/>
                    <span>$12.4k</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured