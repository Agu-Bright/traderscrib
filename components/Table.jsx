import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableComponent() {
  return (
    <TableContainer
      sx={{ background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="text-white">Date</TableCell>
            <TableCell className="text-white" align="right">
              Amount
            </TableCell>
            <TableCell className="text-white" align="right">
              Detail
            </TableCell>
            <TableCell className="text-white" align="right">
              Release
            </TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="text-white" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.calories}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.fat}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
        <TableBody className="py-3">
          <TableRow className="text-white p-2">No Active Deposit</TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
