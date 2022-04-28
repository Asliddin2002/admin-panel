import React, {useState} from 'react'
import SideBar from '../../sidebar/SideBar'
import './list.scss'
import Navbar from '../../navbar/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import {columns, rows} from '../../dataTable'
import {Link} from "react-router-dom"
import {toast} from "react-toastify"


const List = () => {
const [data, setData]= useState(rows)

const handleClick = (id)=> {
  if(window.confirm("Rostdan ham o`chirmoqchimisiz")){
    setData(data.filter(item => item.id !== id))
  }
  toast.info("Muvaffaqiyatli o`chirildi")
}


  const action = [
    {
      field: 'Harakat',
      headerName: 'Action',
      width: 230,
      renderCell: (params) => {
        return (<div className="action">
        <Link to='/users/928' style={{textDecoration:"none"}}>
          <div className="korish-btn">Ko`rish</div> </Link>
          <div onClick={()=> handleClick(params.row.id)} className="ochirish-btn">O`chirish</div>
        </div>)
        
      }}
  ]


  return (
    <div className='list'>
      <SideBar/>
      <div className="list-container">
        <Navbar/>
        <div className="addNew">
        <Link to='/users/new' style={{textDecoration:"none"}}>
          <div className="btn">+ Yangi qo`shish</div>
          </Link>
        </div>
            <div className='datatable darkmode' style={{ height: 600, width: '95%' }}>
          <DataGrid className='darkmode'
            rows={data}
            columns={columns.concat(action)}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  )
}

export default List