import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function TableComponent({ data, columns }) {
  const options = {
    responsive: "standard",
  };

  // Custom theme for MUIDataTable
  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: "#152953", // Set the background to black
              color: "white", // Text color
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              background: "#152953",
              color: "white", // Ensure text is visible
            },
            head: {
              background: "#152953",
              color: "white", // Header text color
            },
          },
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
              background: "#152953",
            },
          },
        },
      },
    });
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </ThemeProvider>
  );
}
