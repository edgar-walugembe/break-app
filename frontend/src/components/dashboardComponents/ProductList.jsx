// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// //primereact imports
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import { Rating } from "primereact/rating";
// import { Tag } from "primereact/tag";

// import { ProductService } from "../../service/ProductService";

// //toastify imports
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const notify = () => {
//   toast.success("let's chat");
// };

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ProductService.getProductsMini().then((data) => setProducts(data));
//   }, []);

//   const formatCurrency = (value) => {
//     return value.toLocaleString("en-US", {
//       style: "currency",
//       currency: "USD",
//     });
//   };

//   const imageBodyTemplate = (product) => {
//     return (
//       <img
//         src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
//         alt={product.image}
//         className="w-[3rem] h-[3rem] shadow rounded"
//       />
//     );
//   };

//   const priceBodyTemplate = (product) => {
//     return formatCurrency(product.price);
//   };

//   const ratingBodyTemplate = (product) => {
//     return <Rating value={product.rating} readOnly cancel={false} />;
//   };

//   const statusBodyTemplate = (product) => {
//     return (
//       <Tag
//         value={product.inventoryStatus}
//         severity={getSeverity(product)}
//       ></Tag>
//     );
//   };

//   const getSeverity = (product) => {
//     switch (product.inventoryStatus) {
//       case "INSTOCK":
//         return "success";

//       case "LOWSTOCK":
//         return "warning";

//       case "OUTOFSTOCK":
//         return "danger";

//       default:
//         return null;
//     }
//   };

//   const header = (
//     <div className="flex flex-wrap items-center justify-between gap-2">
//       <span className="text-xl text-gray-900 font-bold">Products</span>
//       <Button icon="pi pi-refresh" rounded raised />
//     </div>
//   );
//   const footer = `In total there are ${
//     products ? products.length : 0
//   } products.`;

//   return (
//     <div className="product surface-ground px-2 py-1 md:px-4 lg:px-6">
//       <div className="grid">
//         <div className={`rounded button-yellow mb-1 text-[14px] col-12`}>
//           <Link
//             to="/Admin/Dashboard/users/"
//             className="flex justify-evenly w-full py-1"
//           >
//             <span className="text-black">Add New Product</span>
//           </Link>
//         </div>

//         <div className="card p-2 col-12">
//           <DataTable
//             value={products}
//             showGridlines
//             stripedRows
//             header={header}
//             footer={footer}
//             tableStyle={{ minWidth: "50rem" }}
//           >
//             <Column field="name" header="Name" />
//             <Column header="Image" body={imageBodyTemplate} />
//             <Column field="price" header="Price" body={priceBodyTemplate} />
//             <Column field="category" header="Category" />
//             {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} /> */}
//             <Column header="Status" body={statusBodyTemplate} />
//           </DataTable>
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductList;

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//material imports
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

//image imports
import {
  banana,
  cakes,
  cakes00,
  cassava,
  chapati,
  chapati00,
  eggs,
  pani,
  pani00,
  rolex,
  samosa,
  samosa00,
  sausage,
} from "../../assets";

// //modal dialogs
// import { CreateProduct, CreateUser, DeleteProduct } from "../modalComponents";

//context imports
import { ModalContext } from "../../contexts/ModalContext";

function createData(id, img, name, price, timestamps) {
  let imagePath;
  switch (img) {
    case "banana":
      imagePath = banana;
      break;
    case "shortcake":
      imagePath = cakes;
      break;
    case "cassava":
      imagePath = cassava;
      break;
    case "chapati":
      imagePath = chapati00;
      break;
    case "eggs":
      imagePath = eggs;
      break;
    case "pancakes":
      imagePath = pani;
      break;
    case "rolex":
      imagePath = rolex;
      break;
    case "samosa":
      imagePath = samosa;
      break;
    case "sausage":
      imagePath = sausage;
      break;
    default:
      imagePath = "";
  }
  return {
    id,
    img: imagePath,
    name,
    price,
    timestamps,
  };
}

const date = new Date();
const formattedDate = date.toLocaleDateString({
  weekday: "numeric",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timestamps: "numeric",
});

const rows = [
  createData(1, "banana", "Banana", 500, formattedDate),
  createData(2, "shortcake", "Shortcake", 500, formattedDate),
  createData(3, "cassava", "Cassava", 100, formattedDate),
  createData(4, "chapati", "Chapati", 500, formattedDate),
  createData(5, "eggs", "Eggs", 500, formattedDate),
  createData(6, "pancakes", "Pancakes", 100, formattedDate),
  createData(7, "rolex", "Rolex", [1000, 1500, 2000], formattedDate),
  createData(8, "samosa", "Samosa", 200, formattedDate),
  createData(9, "sausage", "Sausage", 500, formattedDate),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ProductId",
  },
  {
    id: "img",
    numeric: true,
    disablePadding: false,
    label: "Product Image",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Product Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price (shs.)",
  },
  {
    id: "timestamps",
    numeric: true,
    disablePadding: false,
    label: "Time Of Entry",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="bg-yellow">
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Product List...
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  //context
  const { openCreateProductDialog } = useContext(ModalContext);

  return (
    <div className="surface-ground px-0 py-1 md:px-4 lg:px-6 ">
      <div className="flex flex-col">
        <div className="flex justify-end items-end p-0 gap-10">
          <div
            className={`rounded button-yellow pdt mb-1 text-[14px] text-center py-2 col-12`}
            onClick={openCreateProductDialog}
          >
            <Link className="">
              <span className="text-black w-full">Add New Product</span>
            </Link>
          </div>
        </div>

        <Box sx={{ width: "100%" }} c="true">
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    const centeredImageStyle = {
                      display: "block",
                      margin: "auto",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    };

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="center"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="center">
                          {row.img && (
                            <img
                              src={row.img}
                              alt={row.name}
                              style={centeredImageStyle}
                            />
                          )}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">{row.timestamps}</TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 20 : 30) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </div>
    </div>
  );
}
