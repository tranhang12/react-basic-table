import { useEffect, useMemo, useState } from "react";
import { COLUMNS } from "./components/columns";
import MOCK_DATA from "./components/MOCK_DATA.json";
import { Table } from "./components/Table";

function App() {
  const intialColumns = useMemo(() => COLUMNS, []);
  const originalData = useMemo(() => MOCK_DATA, []);

  const [columns, setColumns] = useState(intialColumns);
  const [data, setData] = useState(originalData);

  const addColumn = () => {
    setColumns((prevCols) => [
      ...prevCols,
      {
        Header: "New column",
      },
    ]);
  };

  const [skipPageReset, setSkipPageReset] = useState(false);
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  return (
    <div className="App">
      <button onClick={addColumn}>Click here to add column </button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

export default App;
