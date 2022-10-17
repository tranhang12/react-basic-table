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

  const [no, setNo] = useState("");
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitClick = () => {
    setAllFilters([
      {
        id: 'id',
        value: no
      },
      {
        id: "first_name",
        value: firsName,
      },
      {
        id: "last_name",
        value: lastName,
      },
      {
        id: "date_of_birth",
        value: dateOfBirth,
      },
      {
        id: "country",
        value: country,
      },
      {
        id: "phone",
        value: phone,
      },
    ]);
  };

  const resetClick = () => {
    setNo("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setCountry("");
    setPhone("");

    setAllFilters([]);
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
              value={no}
              onChange={(e) => setNo(e.target.value)}
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
              value={firsName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
            />
          </div>
        </div>

        <input type={"submit"} onClick={handleSubmitClick} value={"Search"} />
        <input type={"reset"} onClick={resetClick} value={"Reset"} />
      </div>

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
