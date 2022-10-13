import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
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
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter, filters } = state;

  // console.log("current filters", filters);

  const handleClick = (e) => {
    setAllFilters(
      {
        id: "id",
        value: 12,
      }
      // {
      //   id: "first_name",
      //   value: "Enoch",
      // }
    );
  };

  return (
    <div>
      <div className={"container"}>
        <div lassName={"row"}>
          <div className={"col-25"}>
            <label>ID: </label>
          </div>
          <div className={"col-75"}>
            <input
              type={"number"}
              onChange={(e) => setFilter("id", e.target.value)}
              placeholder="ID"
            />
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-25"}>
            <label>First Name: </label>
          </div>
          <div className="col-75">
            <input
              type={"text"}
              onChange={(e) => setFilter("first_name", e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label>Last Name: </label>
          </div>
          <div className="col-75">
            <input
              type={"text"}
              onChange={(e) => setFilter("last_name", e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label>Date of Birth: </label>
          </div>
          <div className="col-75">
            <input
              type={"date"}
              onChange={(e) => setFilter("date_of_birth", e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label>Country: </label>
          </div>
          <div className="col-75">
            <input
              type={"text"}
              onChange={(e) => setFilter("country", e.target.value)}
              placeholder="Country"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label>Phone: </label>
          </div>
          <div className="col-75">
            <input
              type={"phone"}
              onChange={(e) => setFilter("phone", e.target.value)}
              placeholder="Phone number"
            />
          </div>
        </div>

        <input type={"submit"} onClick={handleClick} value={"Search"} />
      </div>

      {/* <input />
      <input /> */}
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
    </div>
  );
};

export default FilteringTable;
