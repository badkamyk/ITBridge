import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function createData(name: string, isAvailableFirst: boolean, isAvailableSecond: boolean, isAvailableThird: boolean) {
  return { name, isAvailableFirst, isAvailableSecond, isAvailableThird };
}

const headCells = ['Cracking the Coding Interview', 'LeetCode', 'ITBridge'];

const cardClasses = {
  borderRadius: 3,
  width: 90,
  mx: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
};

export const rows = [
  createData('100+ Practice Questions', true, true, true),
  createData('Data Structures Content', true, true, true),
  createData('Guided Format', false, true, true),
  createData('Coding Workspace', false, true, true),
  createData('High-Quality Solutions', false, true, true),
  createData('Video Explanations', false, false, true),
  createData('Mock Interviews', true, false, true),
  createData('All-In-One Platform', true, false, true),
];

export default function TableSection() {
  return (
    <TableContainer component={Paper} sx={{ mt: 10 }} id="comparison-table">
      <Table sx={{ minWidth: 650, width: '60%', mx: 'auto' }} aria-label="table with comparison">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell}
                align="center"
                sx={{
                  minWidth: 170,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  bgcolor: `${headCell === 'ITBridge' ? 'primary.main' : ''}`,
                  color: `${headCell === 'ITBridge' ? 'primary.contrastText' : ''}`,
                }}
              >
                {headCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    bgcolor: `${row.isAvailableFirst ? '#3BB273' : '#E15554'}`,
                    color: `${row.isAvailableFirst ? 'primary.contrastText' : ''}`,
                    ...cardClasses,
                  }}
                >
                  {row.isAvailableFirst ? <CheckIcon /> : <CloseIcon />}
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    bgcolor: `${row.isAvailableSecond ? '#3BB273' : '#E15554'}`,
                    color: `${row.isAvailableSecond ? 'primary.contrastText' : ''}`,
                    ...cardClasses,
                  }}
                >
                  {row.isAvailableSecond ? <CheckIcon /> : <CloseIcon />}
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    bgcolor: `${row.isAvailableThird ? '#3BB273' : '#E15554'}`,
                    color: `${row.isAvailableThird ? 'primary.contrastText' : ''}`,
                    ...cardClasses,
                  }}
                >
                  {row.isAvailableThird ? <CheckIcon /> : <CloseIcon />}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
