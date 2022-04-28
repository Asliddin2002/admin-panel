import './table.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Row } from './Data'

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


const Tables = () => {
  return (
    <div className='table'>
        <span className="title">Eng Sungi Savdolar</span>
                <TableContainer className="table-ui" component={Paper}>
            <Table className='table-row' sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='table-row'>
                <TableRow className='table-row'>
                    <TableCell className='table-row'>Model</TableCell>
                    <TableCell className='table-row' align="right">Narx</TableCell>
                    <TableCell className='table-row' align="right">Mijoz</TableCell>
                    <TableCell className='table-row' align="right">To`lov turi</TableCell>
                    <TableCell className='table-row' align="right" >Status</TableCell>
                </TableRow>
                </TableHead>    
                <TableBody className='table-row'>
                {Row.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell  component="th" scope="row" className="about-product table-row ">
                        {row.product}
                        <img src={row.img} alt="img" className="img" />
                    </TableCell>
                    <TableCell className='table-row' align="right">$ {row.amount}</TableCell>
                    <TableCell className='table-row' align="right">{row.customer}</TableCell>
                    <TableCell className='table-row' align="right">{row.method}</TableCell>
                    <TableCell className='table-row' align="right"  >
                    <span className={`status ${row.status}`}>{row.status}</span> </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default Tables