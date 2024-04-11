import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Monthly 💰', 1000, 1200, 1500, 1800),
  createData('Quarterly 💰', 3000, 3600, 4500, 5400),
  createData('Yearly 💰', 10000, 12000, 15000, 18000),
  createData('Gym + Yoga/Month 💰', 1300, 1500, 1500, 1800),
  createData('Gym + Yoga + Zumba/Month 💰', 1500, 1800, 1800, 2100),
];

export default function Pricing() {
  return (
    <div className='h-[89.5vh] w-[84vw] overflow-y-scroll bg-black p-10'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "black", color: "white" }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ color: "white" }}></TableCell>
              <TableCell align="right" sx={{ color: "white" }}>Male</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>Female</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>Male PT</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>Female PT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>{row.calories}</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>{row.fat}</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>{row.carbs}</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
