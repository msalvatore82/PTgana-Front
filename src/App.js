import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contract from './components/Contracts/Contract/Contract';
import AddContract from './components/AddContract/AddContract';
import EditContract from './components/EditContract/EditContract';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/contracts" element={<Contract />} />
          <Route path="/home" element={<Home />} />
          <Route path="contracts/:_id" element={<EditContract />} />
          <Route path="addcontract" element={<AddContract />} />
          <Route path="/search/:name" element={<Search />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
