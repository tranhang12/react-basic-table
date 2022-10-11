import {BasicTable} from './components/BasicTable'
import { COLUMNS } from "./components/columns";
import MOCK_DATA from "./components/MOCK_DATA.json";
import { useMemo } from 'react';
import SearchForm from './components/SearchForm';
function App() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  return (
    <div className="App">
       <BasicTable columns={columns} data={data} /> 
       <br />
      <SearchForm />
    </div>
  );
}

export default App;
