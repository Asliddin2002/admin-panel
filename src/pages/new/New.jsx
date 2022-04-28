import React,{useState} from 'react'
import './addinfo.scss'
import SideBar from '../../sidebar/SideBar'
import Navbar from '../../navbar/Navbar'

const New = ({data, title}) => {
  const[img, setImg]=useState("")


  return (
    <div className="news">
      <SideBar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <span>{title}</span>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="img-block">
              <img src={img ? URL.createObjectURL(img): "https://skedzi.com/assets/images/users/upload_profile_image.png"} alt="" />
            </div>
          </div>
          
            <form className="form">
            <div className="input-wraper">
                <label htmlFor="">Rasm</label>
                <input onChange={(e)=> setImg(e.target.files[0])} type="file" placeholder='Rasm' />
              </div>
              {data.map((item)=> (

                <div className="input-wraper" key={item.id}>
                <label htmlFor="">{item.label}</label>
                <input type={item.type} placeholder={item.placeholder} />
                </div>
              ))}
              
              {/* <div className="input-wraper">
                <label htmlFor="">Ism va Familiya</label>
                <input type="text" placeholder='Kholturaev Asliddin' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='asliddinwiutstudent@gmail.com' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Telifon nomir</label>
                <input type="text" placeholder='+998 99 556 58 67' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Profil Ism</label>
                <input type="text" placeholder='Asliddin' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Kod</label>
                <input type="password" placeholder='Asliddin2002' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Turar joyi</label>
                <input type="text" placeholder='Tashkent' />
              </div>
              <div className="input-wraper">
                <label htmlFor="">Mamlakat</label>
                <input type="text" placeholder='O`zbekiston' />
              </div> */}
              <div className="submitbtn">
              <button className="btn">Qo`shish</button>
              </div>
            </form>
          
          
        </div>
      </div>
    </div>
  )
}

export default New 