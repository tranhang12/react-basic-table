import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import "./table.css";




export const Table = ({ columns, data, updateMyData, skipPageReset }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    setFilter,
    setAllFilters,
    filterValue,
    preFilteredRows,
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      updateMyData,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value)
    }
  
    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <input value={value} onChange={onChange} onBlur={onBlur} />
  }
  
  // Set our editable cell renderer as the default Cell renderer
  const defaultColumn = {
    Cell: EditableCell,
  }

  const { pageIndex, pageSize } = state;

  const [dataColumn, setDataColumn] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    phone: "",
  });

  const handleSubmitClick = () => {
    setAllFilters([
      {
        id: "id",
        value: dataColumn.id,
      },
    ]);
  };

  return (
    <>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-25"}>
            <label>ID: </label>
          </div>
          <div className={"col-75"}>
            <input
              type={"text"}
              value={dataColumn["id"]}
              onChange={(e) => setDataColumn({ id: e.target.value })}
              placeholder="ID"
            />
          </div>
        </div>
        <input type={"submit"} onClick={handleSubmitClick} value={"Search"} />
        {/* <input type={"reset"} onClick={resetClick} value={"Reset"} /> */}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "60px" }}
          />
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};
