import React from 'react'
import "./home.scss"
import SideBar from '../../sidebar/SideBar'
import Navbar from '../../navbar/Navbar'
import Cards from '../../cards/Cards'
import Featured from '../../featured/Featured'
import Chart from '../../chart/Chart'
import Tables from '../../table/Table'


const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className="home-container">
        <Navbar/>
        <div className="card-wrapper">
          <Cards type= "users"/>
          <Cards type="orders"/>
          <Cards type="earnings" />
          <Cards type="balance"/>
        </div>
        <div className="feature-wrapper">
          <Featured/>
          <Chart wid={750} hed={430} text={"Yetti Oylik Savdo Ko`rsatgichlari"}/>
        </div>
        <div className="table-wraper">
          <Tables/>
        </div>
        </div>
      </div>
  )
}

export default Home