import React from 'react'
import './single.scss'
import SideBar from '../../sidebar/SideBar'
import Navbar from '../../navbar/Navbar'
import Chart from '../../chart/Chart'
import Tables from '../../table/Table'


const Single = () => {
  return (
    <div className = "single">
      <SideBar/>
      <div className="single-container">
        <Navbar/>
        <div className="up">
          <div className="left">
            <div className="info">
              <div className="edit">edit</div>
            <span className='title'>Shaxsiy malumotlar</span>
            <div className="img-wraper">
              <div className="img-block">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='img' alt="" />
              </div>
              <div className="ditails"><h4>Asliddin </h4>
              <span className="email">Email: asliddinwiutstudent@gmail.com</span>
              <span className="phone">Telifon: +998 99 556 58 67</span>
              <span className="location">Yashash Joyi: Toshkent, Uchtepa</span>
              <span className="country">O`zbekiston</span>
              </div> 
              </div>
            </div>
          </div>
          <div className="right">
            <Chart wid={800} hed={230} text={"Yetti  Oylik Xarid Ko`rsatgichlari"}/>
          </div>
        </div>
        <div className="down">
          <Tables/>
        </div>
      </div>
    </div>
  )
}

export default Single