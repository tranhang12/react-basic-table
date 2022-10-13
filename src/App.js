import {BasicTable} from './components/BasicTable'
import { COLUMNS } from "./components/columns";
import MOCK_DATA from "./components/MOCK_DATA.json";
import { useMemo } from 'react';
import SearchForm from './components/SearchForm';
import FilteringTable from './components/FilteringTable';
import Test from './components/Test';
function App() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  return (
    <div className="App">
       {/* <BasicTable columns={columns} data={data} /> 
       <br />
      <SearchForm /> */}
      <FilteringTable />
    </div>
  );
}

export default App;
