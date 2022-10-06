import React, { useState } from "react";

export const FormAdd = ({ tableData, setTableData }) => {
  const [newData, setNewData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    country: "",
    phone: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const Add = (e) => {
    e.preventDefault();
    setTableData([...tableData, { ...newData }]); 
    setNewData({
      // for enptying the form
      id: "",
      first_name: "",
      last_name: "",
      date_of_birth: "",
      country: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row py-3">
          <form className="d-flex flex-wrap justify-content-center form">
            <input
              type="text"
              name="id"
              required
              placeholder="Enter id..."
              onChange={Change}
              value={newData.id}
              className="form-control-sm fs-4 col-3 mx-5"
            />
            <input
              type="text"
              name="first_name"
              required
              placeholder="Enter first name..."
              onChange={Change}
              value={newData.first_name}
              className="form-control-sm col-3 mx-5 fs-4"
            />
            <input
              type="text"
              name="date_of_birth"
              required
              placeholder="Enter last name..."
              onChange={Change}
              value={newData.date_of_birth}
              className="form-control-sm col-3 mx-5 fs-4"
            />
            <input
              type="country"
              name="country"
              required
              placeholder="Enter an country..."
              onChange={Change}
              value={newData.country}
              className="form-control-sm col-3 mx-5 fs-4 mt-4"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Enter country..."
              onChange={Change}
              value={newData.phone}
              className="form-control-sm col-3 mx-5 fs-4 mt-4"
            />
            <div className="w-100"></div>
            <button
              className="btn-primary px-2 mx-3 fs-3 col-2 mt-4"
              onClick={Add}
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
